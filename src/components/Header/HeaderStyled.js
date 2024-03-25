import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(25, 26, 21, 0.1);

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-nav {
    display: flex;
    gap: 130px;
    align-items: center;
    width: 536px;
  }

  .header-nav-list {
    display: flex;
    gap: 40px;
  }

  .header-nav-logo {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -2%;
    color: var(--blue-color);
  }

  .header-nav-logo-text {
    color: var(--primary-text-color);
  }

  .header-button-wrapper {
    display: flex;
    gap: 8px;
  }

  .header-log-in-button {
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

  .header-log-in-button:hover {
    background-color: var(--blue-hover-color);
    color: var(--white-color);
  }

  .header-registration-button {
    padding: 14px 40px 14px 40px;
    border-radius: 30px;
    background-color: var(--blue-color);
    color: var(--white-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -1%;
    border-color: transparent;
  }

  .header-registration-button:hover {
    background-color: var(--blue-hover-color);
  }
`;

export const NavLinkStyledHome = styled(NavLink)`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -1%;
`;

export const NavLinkStyledPsychologists = styled(NavLink)`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -1%;
  position: relative;

  &.active:after {
    content: "";

    position: absolute;
    left: 47.5px;
    right: auto;
    top: 24px;
    width: 8px;
    height: 8px;

    border-radius: 50%;
    background-color: var(--blue-color);
  }
`;

export const NavLinkStyledFavorites = styled(NavLink)`
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -1%;
  position: relative;

  &.active:after {
    content: "";

    position: absolute;
    left: 31px;
    right: auto;
    top: 24px;
    width: 8px;
    height: 8px;

    border-radius: 50%;
    background-color: var(--blue-color);
  }
`;
