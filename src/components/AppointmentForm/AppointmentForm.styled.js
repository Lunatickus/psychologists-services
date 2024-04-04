import styled from "styled-components";

export const TitleStyled = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -2%;
  color: var(--primary-text-color);
  margin-bottom: 20px;
`;

export const TextStyled = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: 0%;
  color: rgba(25, 26, 21, 0.5);
  margin-bottom: 40px;
`;

export const AvatarWrapperStyled = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;

  .avatar {
    border-radius: 15px;
  }

  .psychologist-text {
    color: var(--gray-color);
    font-size: 12px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: 0%;
  }

  .psychologist-name {
    color: var(--primary-text-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0%;
  }
`;

export const FormStyled = styled.form`
  .form-content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .form-input {
    width: 100%;
    height: 52px;
    padding: 16px 18px;
    border: 1px solid rgba(25, 26, 21, 0.1);
    border-radius: 12px;
    color: var(--primary-text-color);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: 0%;
    outline: none;
    background-color: transparent;
  }

  .form-input::placeholder {
    color: var(--primary-text-color);
  }

  .time-tel-wrapper {
    position: relative;
  }

  .form-input-tel {
    width: 50%;
  }

  .form-input-time {
    width: 50%;
    font-family: inherit;
  }

  .time-list {
    position: absolute;
    top: 60px;
    right: 0;
    border-radius: 12px;
    box-shadow: 0px 20px 69px 0px rgba(0, 0, 0, 0.07);
    background: var(--primary-white-color);
    border: none;
    width: 151px;
    height: 180px;
    padding: 16px;
    outline: none;
  }

  .time-list-label {
    color: var(--primary-text-color);
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0%;
  }

  .time-list-option {
    color: rgba(25, 26, 21, 0.3);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: 0%;
    padding-top: 4px;
  }

  .time-list-option:first-child {
    padding-top: 16px;
  }

  .time-list::-webkit-scrollbar {
    width: 0;
  }
  .form-input-time::-webkit-calendar-picker-indicator {
    pointer-events: none;
  }

  .form-input-comment {
    resize: none;
    font-family: inherit;
    height: 116px;
    margin-bottom: 40px;
    font-family: inherit;
  }

  .form-label {
    position: relative;
  }

  .input-error {
    position: absolute;
    left: 0;
    font-size: 14px;
    color: #ef5050;
    font-weight: 400;
    line-height: 128.5%;
  }

  .submit-styled {
    width: 100%;
    height: 52px;
    padding-top: 16px;
    padding-bottom: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -1%;
    color: var(--white-color);
    border-radius: 30px;
    background-color: var(--blue-color);
    border: none;
    transition: 250ms linear;
  }

  .submit-styled:hover {
    background-color: var(--blue-hover-color);
  }
`;
