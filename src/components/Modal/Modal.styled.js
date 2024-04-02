import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba(25, 26, 21, 0.6);
  transition: 250ms linear;

  .modal {
    position: absolute;
    max-height: 580px;
    max-width: 566px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    padding: 64px;
    overflow: auto;
    background-color: var(--white-color);
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
