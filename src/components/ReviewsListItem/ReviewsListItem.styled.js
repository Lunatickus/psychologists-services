import styled from "styled-components";

export const ReviewsItemStyled = styled.li`
  .item-content-wrapper {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
  }

  .item-avatar-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    border-radius: 100px;
    background-color: rgba(52, 112, 255, 0.2);
    color: var(--blue-color);
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
  }

  .item-reviewer {
    color: var(--primary-text-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: 0%;
    margin-bottom: 4px;
  }

  .item-rating-wrapper {
    display: flex;
    gap: 8px;
  }

  .item-rating {
    color: var(--primary-text-color);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: 0%;
  }

  .item-comment {
    color: rgba(25, 26, 21, 0.5);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: 0%;
  }
`;
