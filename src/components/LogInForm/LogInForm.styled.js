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

export const FormStyled = styled.form`
  .form-input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
  }

  .form-label {
    position: relative;
  }

  .form-input {
    width: 100%;
    padding: 16px 18px;
    border: 1px solid rgba(25, 26, 21, 0.1);
    border-radius: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: 0%;
    color: var(--primary-text-color);
    outline: none;
  }

  .form-input::placeholder {
    color: var(--primary-text-color);
  }

  .register-form-input-error {
    position: absolute;
    font-size: 14px;
    color: #ef5050;
    font-weight: 400;
    line-height: 128.5%;
  }

  .form-submit {
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

  .form-submit:hover {
    background-color: var(--blue-hover-color);
  }

  .password-show-button {
    position: absolute;
    top: 16px;
    right: 18px;
    background-color: transparent;
    padding: 0;
    border: none;
  }

  .form-input-password {
    padding-right: 38px;
  }
`;
