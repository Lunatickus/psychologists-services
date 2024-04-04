import { useSearchParams, useLocation } from "react-router-dom";
import { ButtonStyled } from "./LoadMoreButton.styled";
import { useDispatch } from "react-redux";
import {
  fetchPsychologistsByFilterAll,
  fetchPsychologistsByFilterAllReverse,
} from "../../redux/psychologists/psychologistsOperations";
import { getFavoritesByFilterAll, getFavoritesByFilterReverse } from "../../services/favorites";

export const LoadMoreButton = ({loadFavorites}) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const { pathname } = useLocation();
  
  const handleLoadMore = () => {
    if (
      filter === "A to Z" ||
      filter === "Less than 10$" ||
      filter === "Not popular"
    ) {
      pathname === "/psychologists" ? dispatch(fetchPsychologistsByFilterAll(filter)) : loadFavorites(getFavoritesByFilterAll(filter));
    } else if (
      filter === "Z to A" ||
      filter === "Greater than 10$" ||
      filter === "Popular"
    ) {
      pathname === "/psychologists" ? dispatch(fetchPsychologistsByFilterAllReverse(filter)) : loadFavorites(getFavoritesByFilterReverse(filter));
    } else {
      pathname === "/psychologists" ? dispatch(fetchPsychologistsByFilterAll("A to Z")) : loadFavorites(getFavoritesByFilterAll("A to Z"));
    }
  };

  return (
    <ButtonStyled type="button" onClick={handleLoadMore}>
      Load more
    </ButtonStyled>
  );
};
