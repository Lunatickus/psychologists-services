import styled from "styled-components";
import BackgroundImage from "../../images/background.png";
import { Link } from "react-router-dom";

export const Background = styled.div`
  height: 100vh;
  background-color: var(--primary-white-color);
  background-image: radial-gradient(
    circle 800px at bottom right,
    rgba(52, 112, 255, 0.8),
    var(--primary-white-color)
  );

  .home-page-main {
    height: calc(100% - 100px);
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-position: right 128px top 60px;
    background-size: 526px auto;
  }

  .home-page-section {
    display: flex;
    gap: 24px;
    align-items: flex-end;
    padding-top: 126px;
  }

  .home-content-wrapper {
    width: 595px;
  }

  .home-title {
    font-size: 80px;
    font-weight: 600;
    line-height: 1.025;
    letter-spacing: -2%;
    color: var(--primary-text-color);
    margin-bottom: 20px;
  }

  .home-title-text {
    color: var(--blue-color);
  }

  .home-text {
    color: var(--primary-text-color);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: -2%;
    margin-bottom: 40px;
  }

  .home-link-text {
    color: var(--white-color);
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -1%;
    margin-right: 18px;
  }

  .home-psychologists-wrapper {
    padding: 32px;
    display: flex;
    gap: 16px;
    border-radius: 13px;
    background-color: var(--blue-color);
    margin-bottom: 35px;
  }

  .checkbox-wrapper {
    width: 54px;
    height: 54px;
    border-radius: 13px;
    background-color: var(--white-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .home-psychologists-text {
    color: rgba(251, 251, 251, 0.5);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.21;
    letter-spacing: 0%;
    margin-bottom: 8px;
  }

  .home-psychologists-amount {
    color: var(--white-color);
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.21;
    letter-spacing: 0%;
  }
`;

export const LinkStyled = styled(Link)`
  padding: 18px 50px 18px 50px;
  border-radius: 30px;
  background-color: var(--blue-color);
  transition: 250ms linear;

  &:hover {
    background-color: var(--blue-hover-color);
  }
`;
