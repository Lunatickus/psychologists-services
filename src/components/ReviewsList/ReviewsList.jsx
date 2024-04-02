import { ReviewsListItem } from "../ReviewsListItem/ReviewsListItem";
import { ReviewsListStyled } from "./ReviewsList.styled";

export const ReviewsList = ({ reviews }) => {
  return (
    <ReviewsListStyled>
      {reviews.map((review) => (
        <ReviewsListItem review={review} key={review.reviewer} />
      ))}
    </ReviewsListStyled>
  );
};
