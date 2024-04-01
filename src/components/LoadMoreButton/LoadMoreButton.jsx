import { useSearchParams } from "react-router-dom";
import { ButtonStyled } from "./LoadMoreButton.styled";
import { useDispatch } from "react-redux";
import {
  fetchPsychologistsByFilterAll,
  fetchPsychologistsByFilterAllReverse,
} from "../../redux/psychologists/psychologistsOperations";

export const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const handleLoadMore = () => {
    if (
      filter === "A to Z" ||
      filter === "Less than 10$" ||
      filter === "Not popular"
    ) {
      dispatch(fetchPsychologistsByFilterAll(filter));
    } else if (
      filter === "Z to A" ||
      filter === "Greater than 10$" ||
      filter === "Popular"
    ) {
      dispatch(fetchPsychologistsByFilterAllReverse(filter));
    } else {
      dispatch(fetchPsychologistsByFilterAll("A to Z"));
    }
  };

  return (
    <ButtonStyled type="button" onClick={handleLoadMore}>
      Load more
    </ButtonStyled>
  );
};
