import { useEffect, useState } from "react";
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
import { STORAGE_KEY } from "../../services/keys";

const PsychologistsPage = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  const isUserLoading = useSelector(selectUserIsLoading);
  const isPsychologistsIsLoading = useSelector(selectPsychologistsIsLoading);
  const psychologists = useSelector(selectPsychologistsItems);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const handleAdRemoveFavorites = (item) => {
    if (favorites.some((favorite) => favorite.name === item.name)) {
      const filtered = favorites.filter(
        (favorite) => favorite.name !== item.name
      );
      setFavorites([...filtered]);
      return;
    }

    setFavorites((prevState) => [...prevState, item]);
  };

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
            <PsychologistsList psychologists={psychologists} addRemoveFavorite={handleAdRemoveFavorites} favorites={favorites} />
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
      {isUserLoading && <Loader />}
      {isPsychologistsIsLoading && <Loader />}
    </>
  );
};

export default PsychologistsPage;
