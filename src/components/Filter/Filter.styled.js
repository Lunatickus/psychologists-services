import styled from "styled-components";

export const TextStyled = styled.p`
  color: var(--gray-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: 0%;
  margin-bottom: 8px;
`;

export const FilterStyled = styled.div`
  position: relative;
  margin-bottom: 32px;

  .filter-title {
    display: flex;
    justify-content: space-between;
    width: 226px;
    height: 48px;
    padding-left: 18px;
    padding-right: 23px;
    padding-top: 14px;
    padding-bottom: 14px;
    border-radius: 14px;
    background-color: var(--blue-color);
    outline: none;
    border: none;
    color: var(--white-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: 0%;
  }

  .filter-select {
    position: absolute;
    top: 56px;
    width: 226px;
    outline: none;
    border: none;
    background-color: var(--primary-white-color);
    color: rgba(25, 26, 21, 0.3);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: 0%;
    border-radius: 14px;
    padding: 14px 18px;
  }

  .filter-select::-webkit-scrollbar {
    width: 0;
  }

  .filter-option {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .filter-option:first-child {
    color: var(--primary-text-color);
  }
`;
