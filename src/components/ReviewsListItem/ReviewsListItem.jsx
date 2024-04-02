import { ReactComponent as Star } from "../../icons/star.svg";
import { ReviewsItemStyled } from "./ReviewsListItem.styled";

export const ReviewsListItem = ({ review }) => {
  const { comment, rating, reviewer } = review;

  return (
    <ReviewsItemStyled>
      <div className="item-content-wrapper">
        <div className="item-avatar-wrapper">
          <p>{reviewer[0]}</p>
        </div>
        <div>
          <p className="item-reviewer">{reviewer}</p>
          <div className="item-rating-wrapper">
            <Star />
            <p className="item-rating">{rating}</p>
          </div>
        </div>
      </div>
      <p className="item-comment">{comment}</p>
    </ReviewsItemStyled>
  );
};
