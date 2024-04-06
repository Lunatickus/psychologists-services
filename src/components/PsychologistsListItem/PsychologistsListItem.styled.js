import styled from "styled-components";

export const ItemStyled = styled.li`
  /* display: flex;
  gap: 24px;
  align-items: flex-start; */
  padding: 24px;
  max-width: 1184px;
  background-color: var(--white-color);
  border-radius: 24px;

  @media screen and (min-width: 1184px) {
    display: flex;
    gap: 24px;
    align-items: flex-start;
  }

  .avatar-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgba(52, 112, 255, 0.2);
    border-radius: 30px;
    width: 120px;
    height: 120px;
  }

  @media screen and (min-width: 510px) {
    .item-head-content-wrapper {
    display: flex;
    align-items: center;
  }

  .item-head-wrapper {
    display: flex;
    justify-content: space-between;
  }
  }

  .avatar {
    border-radius: 15px;
  }

  .avatar-circle {
    position: absolute;
    top: 9px;
    right: 14px;
  }

  .item-content-wrapper {
    max-width: 992px;
    margin-bottom: 8px;
  }

  /* .item-head-wrapper {
    display: flex;
    justify-content: space-between;
  } */

  .item-head-text {
    color: var(--gray-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0%;
  }

  /* .item-head-content-wrapper {
    display: flex;
    align-items: center;
  } */

  .item-head-content-text {
    color: var(--primary-text-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0%;
  }

  .rating {
    margin-left: 8px;
    margin-right: 16px;
  }

  .item-head-delimiter {
    color: rgba(25, 26, 21, 0.2);
  }

  .price {
    margin-left: 16px;
    margin-right: 28px;
  }

  .item-head-content-text-price {
    color: #38cd3e;
  }

  .item-head-favorite-btn {
    padding: 0;
    line-height: 0;
    background-color: transparent;
    border: transparent;
  }

  .item-name {
    color: var(--primary-text-color);
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0%;
    margin-bottom: 24px;
  }

  .item-inform-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 4px;
    margin-bottom: 24px;
  }

  .item-inform-text {
    border-radius: 24px;
    background: rgb(243, 243, 243);
    padding: 8px 16px 8px 16px;
    color: var(--gray-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0%;
  }

  .item-inform-text-value {
    color: var(--primary-text-color);
  }

  .item-about {
    color: rgba(25, 26, 21, 0.5);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: 0%;
  }

  .item-read-more-btn {
    padding: 0;
    background-color: transparent;
    border: transparent;
    color: var(--primary-text-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0%;
    text-decoration-line: underline;
    margin-top: 14px;
  }

  .item-appointment-btn {
    padding: 14px 32px 14px 32px;
    border-radius: 30px;
    background-color: var(--blue-color);
    border: transparent;
    color: var(--white-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -1%;
    transition: 250ms linear;
  }

  .item-appointment-btn:hover {
    background-color: var(--blue-hover-color);
  }
`;
