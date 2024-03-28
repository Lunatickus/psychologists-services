import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import {
  HeaderStyled,
  NavLinkStyledFavorites,
  NavLinkStyledHome,
  NavLinkStyledPsychologists,
} from "./HeaderStyled";
import { useSelector } from "react-redux";
import { selectUserIsLoggedIn } from "../../redux/auth/auth.selectors";
import { UserMenu } from "../UserMenu/UserMenu";

export const Header = ({ openRegisterModal, openLogInModal }) => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

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
              {isLoggedIn && (
                <li>
                  <NavLinkStyledFavorites to="/favorites">
                    Favorites
                  </NavLinkStyledFavorites>
                </li>
              )}
            </ul>
          </nav>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
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
          )}
        </div>
      </Container>
    </HeaderStyled>
  );
};
