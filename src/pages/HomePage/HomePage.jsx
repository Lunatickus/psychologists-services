import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Background, LinkStyled } from "./HomePage.styled";
import { ReactComponent as Arrow } from "../../icons/arrow.svg";
import { ReactComponent as Checkbox } from "../../icons/checkbox.svg";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import { LogInForm } from "../../components/LogInForm/LogInForm";
import { useSelector } from "react-redux";
import { selectUserIsLoading } from "../../redux/auth/auth.selectors";
import { Loader } from "../../components/Loader/Loader";

const HomePage = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  const isLoading = useSelector(selectUserIsLoading);

  return (
    <>
      <Background>
        <Header
          openRegisterModal={() => setIsRegisterModalOpen(true)}
          openLogInModal={() => setIsLogInModalOpen(true)}
        />
        <main className="home-page-main">
          <Container>
            <section className="home-page-section">
              <div className="home-content-wrapper">
                <h1 className="home-title">
                  The road to the{" "}
                  <span className="home-title-text">depths</span> of the human
                  soul
                </h1>
                <p className="home-text">
                  We help you to reveal your potential, overcome challenges and
                  find a guide in your own life with the help of our experienced
                  psychologists.
                </p>
                <LinkStyled to="/psychologists">
                  <span className="home-link-text">Get started</span>
                  <Arrow />
                </LinkStyled>
              </div>
              <div className="home-psychologists-wrapper">
                <div className="checkbox-wrapper">
                  <Checkbox />
                </div>
                <div>
                  <p className="home-psychologists-text">
                    Experienced psychologists
                  </p>
                  <p className="home-psychologists-amount">15,000</p>
                </div>
              </div>
            </section>
          </Container>
        </main>
      </Background>
      {isRegisterModalOpen && (
        <Modal closeModal={() => setIsRegisterModalOpen(false)}>
          <RegistrationForm closeModal={() => setIsRegisterModalOpen(false)} />
        </Modal>
      )}
      {isLogInModalOpen && (
        <Modal closeModal={() => setIsLogInModalOpen(false)}>
          <LogInForm closeModal={() => setIsLogInModalOpen(false)} />
        </Modal>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default HomePage;
