import { ReactComponent as AvatarCircle } from "../../icons/avatar-circle.svg";
import { ReactComponent as Star } from "../../icons/star.svg";
import { ReactComponent as UnpaintedHeart } from "../../icons/unpainted-heart.svg";
import { ReactComponent as PaintedHeart } from "../../icons/painted-heart.svg";
import { ItemStyled } from "./PsychologistsListItem.styled";
import { ReviewsList } from "../ReviewsList/ReviewsList";
import { useEffect, useState } from "react";
import { STORAGE_KEY } from "../../services/keys";
import { Modal } from "../Modal/Modal";

export const PsychologistsListItem = ({ psychologist }) => {
  const {
    name,
    about,
    avatar_url,
    experience,
    initial_consultation,
    license,
    price_per_hour,
    rating,
    reviews,
    specialization,
  } = psychologist;

  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? [];
  });
  const isFavorite = favorites.some((fav) => fav.name === name);

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
    <ItemStyled>
      <div className="avatar-wrapper">
        <img
          src={avatar_url}
          alt="photo"
          width="96"
          height="96"
          className="avatar"
        />
        <AvatarCircle className="avatar-circle" />
      </div>
      <div className="item-content-wrapper">
        <div className="item-head-wrapper">
          <p className="item-head-text">Psychologist</p>
          <div className="item-head-content-wrapper">
            <Star />
            <p className="item-head-content-text rating">Rating: {rating}</p>
            <p className="item-head-delimiter">|</p>
            <p className="item-head-content-text price">
              Price / 1 hour:{" "}
              <span className="item-head-content-text-price">
                {price_per_hour}$
              </span>
            </p>
            <button
              type="button"
              className="item-head-favorite-btn"
              onClick={() => handleAdRemoveFavorites(psychologist)}
            >
              {isFavorite ? <PaintedHeart /> : <UnpaintedHeart />}
            </button>
          </div>
        </div>
        <p className="item-name">{name}</p>
        <div className="item-inform-wrapper">
          <p className="item-inform-text">
            Experience:{" "}
            <span className="item-inform-text-value">{experience}</span>
          </p>
          <p className="item-inform-text">
            License: <span className="item-inform-text-value">{license}</span>
          </p>
          <p className="item-inform-text">
            Specialization:{" "}
            <span className="item-inform-text-value">{specialization}</span>
          </p>
          <p className="item-inform-text">
            Initial_consultation:{" "}
            <span className="item-inform-text-value">
              {initial_consultation}
            </span>
          </p>
        </div>
        <p className="item-about">{about}</p>
        {!isReadMoreOpen && (
          <button
            type="button"
            className="item-read-more-btn"
            onClick={() => setIsReadMoreOpen(true)}
          >
            Read more
          </button>
        )}
        {isReadMoreOpen && (
          <>
            <ReviewsList reviews={reviews} />
            <button
              type="button"
              className="item-appointment-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Make an appointment
            </button>
          </>
        )}
      </div>
      {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
    </ItemStyled>
  );
};
