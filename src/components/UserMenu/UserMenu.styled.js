import styled from "styled-components";

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  .user-wrapper {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .user-name {
    color: var(--primary-text-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -1%;
  }

  .log-out-button {
    padding: 14px 39px 14px 39px;
    border: 1px solid rgba(25, 26, 21, 0.2);
    border-radius: 30px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -1%;
    color: var(--primary-text-color);
    background-color: transparent;
  }

  .log-out-button:hover {
    background-color: var(--blue-hover-color);
    color: var(--white-color);
  }
`;
