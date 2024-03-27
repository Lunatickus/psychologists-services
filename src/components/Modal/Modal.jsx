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

    window.addEventListener("keydown", onEsc);

    return () => {
      window.removeEventListener("keydown", onEsc);
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
