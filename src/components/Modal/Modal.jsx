import { useEffect } from "react";
import { ReactComponent as CloseBtn } from "../../icons/close-btn.svg";
import { createPortal } from "react-dom";
import { Backdrop } from "./Modal.styled";
const modalRoot = document.getElementById("modal");

export const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    function onEsc({ code }) {
      if (code !== "Escape") {
        return;
      }

      closeModal();
    }
    document.body.style.overflow = 'hidden';
    const paddingOffSet = window.innerWidth - document.body.offsetWidth + 'px';

    document.body.style.paddingRight = paddingOffSet;
    window.addEventListener("keydown", onEsc);

    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
  }, [closeModal]);

  const onBackdrop = ({ target, currentTarget }) => {
    if (target !== currentTarget) {
      return;
    }
    closeModal();
  };

  return createPortal(
    <Backdrop onClick={onBackdrop}>
      <div className="modal">
        <button type="button" className="close-btn" onClick={closeModal}>
          <CloseBtn />
        </button>
        {children}
      </div>
    </Backdrop>,
    modalRoot
  );
};
