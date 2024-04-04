import { Container } from "../../components/Container/Container";
import { SectionStyled } from "./FavoritesPage.styled";
import { Header } from "../../components/Header/Header";
import { Filter } from "../../components/Filter/Filter";
import { PsychologistsList } from "../../components/PsychologistsList/PsychologistsList";
import { useEffect, useState } from "react";
import { STORAGE_KEY } from "../../services/keys";
import { LoadMoreButton } from "../../components/LoadMoreButton/LoadMoreButton";
import { useSearchParams } from "react-router-dom";
import {
  getAllFavorites,
  getFavoritesByFilterFirstThree,
  getFavoritesByFilterFirstThreeReverse,
} from "../../services/favorites";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? [];
  });
  const [searchParams] = useSearchParams();
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  const filter = searchParams.get("filter");
  const showLoadMore = favorites.length > 3 && filteredFavorites.length === 3;

  useEffect(() => {
    const getFavoritesByFilter = (str) => {
      if (
        str === "A to Z" ||
        str === "Less than 10$" ||
        str === "Not popular"
      ) {
        setFilteredFavorites(getFavoritesByFilterFirstThree(str));
      } else if (
        str === "Z to A" ||
        str === "Greater than 10$" ||
        str === "Popular"
      ) {
        setFilteredFavorites(getFavoritesByFilterFirstThreeReverse(str));
      } else if (str === "Show all") {
        setFilteredFavorites(getAllFavorites());
      } else {
        setFilteredFavorites(getFavoritesByFilterFirstThree("A to Z"));
      }
    };

    getFavoritesByFilter(filter);
  }, [filter]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const handleAdRemoveFavorites = (item) => {
    if (favorites.some((favorite) => favorite.name === item.name)) {
      const filtered = favorites.filter(
        (favorite) => favorite.name !== item.name
      );
      setFavorites([...filtered]);
      setFilteredFavorites([...filtered]);
      return;
    }

    setFavorites((prevState) => [...prevState, item]);
  };

  return (
    <>
      <Header />
      <main>
        <Container>
          <SectionStyled>
            {favorites.length !== 0 && <Filter /> }
            <PsychologistsList
              psychologists={filteredFavorites}
              addRemoveFavorite={handleAdRemoveFavorites}
              favorites={favorites}
            />
            {showLoadMore && <LoadMoreButton loadFavorites={setFilteredFavorites} />}
            {favorites.length === 0 && <h2 className="title">Please choose your favorites</h2>}
          </SectionStyled>
        </Container>
      </main>
    </>
  );
};

export default FavoritesPage;
