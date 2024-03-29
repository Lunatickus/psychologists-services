import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 14px 48px 14px 48px;
  border-radius: 30px;
  background-color: var(--blue-color);
  color: var(--white-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -1%;
  border: none;

  &:hover {
    background-color: var(--blue-hover-color);
  }
`;
