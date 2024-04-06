import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgba(25, 26, 21, 0.6);
  transition: 250ms linear;

  .modal {
    position: absolute;
    max-height: 580px;
    max-width: 566px;
    min-width: 320px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    padding: 32px;
    overflow: auto;
    background-color: var(--white-color);
  }

  @media screen and (min-width: 768px) {
    .modal {
      padding: 64px;
    }
  }

  .close-btn {
    position: absolute;
    right: 20px;
    top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    transition: 250ms linear;
    border: none;
    padding: 0;
  }
`;
