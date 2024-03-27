import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import {
  HeaderStyled,
  NavLinkStyledFavorites,
  NavLinkStyledHome,
  NavLinkStyledPsychologists,
} from "./HeaderStyled";

export const Header = ({ openRegisterModal, openLogInModal }) => {
  return (
    <HeaderStyled>
      <Container>
        <div className="header-wrapper">
          <nav className="header-nav">
            <Link to="/">
              <span className="header-nav-logo">
                psychologists.
                <span className="header-nav-logo-text">services</span>
              </span>
            </Link>
            <ul className="header-nav-list">
              <li>
                <NavLinkStyledHome to="/">Home</NavLinkStyledHome>
              </li>
              <li>
                <NavLinkStyledPsychologists to="/psychologists">
                  Psychologists
                </NavLinkStyledPsychologists>
              </li>
              <li>
                <NavLinkStyledFavorites to="/favorites">
                  Favorites
                </NavLinkStyledFavorites>
              </li>
            </ul>
          </nav>
          <div className="header-button-wrapper">
            <button
              type="button"
              className="header-log-in-button"
              onClick={openLogInModal}
            >
              Log In
            </button>
            <button
              type="button"
              className="header-registration-button"
              onClick={openRegisterModal}
            >
              Registration
            </button>
          </div>
        </div>
      </Container>
    </HeaderStyled>
  );
};
