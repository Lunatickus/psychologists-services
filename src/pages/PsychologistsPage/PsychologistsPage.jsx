import { useState } from "react";
import { Container } from "../../components/Container/Container";
import { Filter } from "../../components/Filter/Filter";
import { Header } from "../../components/Header/Header";
import { SectionStyled } from "./PsychologistsPage.styled";
import { useSelector } from "react-redux";
import { selectUserIsLoading } from "../../redux/auth/auth.selectors";
import { Loader } from "../../components/Loader/Loader";
import { LogInForm } from "../../components/LogInForm/LogInForm";
import { Modal } from "../../components/Modal/Modal";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import { LoadMoreButton } from "../../components/LoadMoreButton/LoadMoreButton";
import {
  selectPsychologistsIsLoading,
  selectPsychologistsItems,
} from "../../redux/psychologists/psychologists.selector";
import { PsychologistsList } from "../../components/PsychologistsList/PsychologistsList";

const PsychologistsPage = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  const isUserLoading = useSelector(selectUserIsLoading);
  const isPsychologistsIsLoading = useSelector(selectPsychologistsIsLoading);
  const psychologists = useSelector(selectPsychologistsItems);

  return (
    <>
      <Header
        openRegisterModal={() => setIsRegisterModalOpen(true)}
        openLogInModal={() => setIsLogInModalOpen(true)}
      />
      <main>
        <Container>
          <SectionStyled>
            <Filter />
            <PsychologistsList psychologists={psychologists} />
            {psychologists.length <= 3 && <LoadMoreButton />}
          </SectionStyled>
        </Container>
      </main>
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
      {isUserLoading || (isPsychologistsIsLoading && <Loader />)}
    </>
  );
};

export default PsychologistsPage;
