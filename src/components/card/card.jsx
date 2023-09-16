import React from "react";
import PropTypes from "prop-types";
import {CARD_PROP_TYPES} from "../../const/const";
import {Link} from "react-router-dom";

const Card = (props) => {
  const {item, onMouseOver, onMouseOut, nearbyFlagCard} = props;
  const {id, isPremium, isFavorite, price, images, title, type} = item;

  const handleCardMouseOver = () => {
    onMouseOver(item);
  };

  const handleCardMouseOut = () => {
    onMouseOut(null);
  };
  return (
    <article
      onMouseOver={handleCardMouseOver}
      onMouseOut={handleCardMouseOut}
      className={`place-card ${nearbyFlagCard === false ? `cities__place-card` :
        `near-places__card`}`}>
      <div className={isPremium ? `place-card__mark` : ``}>
        <span>{isPremium ? `Premium` : ``}</span>
      </div>
      <div className={`place-card__image-wrapper ${nearbyFlagCard === false ? `cities__image-wrapper` :
        `near-places__image-wrapper`}`}>
        <Link to={`${nearbyFlagCard === false ? `offer/${id}` : `${id}`}`}>
          <img className="place-card__image" src={images[0]} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={isFavorite ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`}type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${nearbyFlagCard === false ? `offer/${id}` : `${id}`}`} target="_blank">{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  item: CARD_PROP_TYPES.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  nearbyFlagCard: PropTypes.bool.isRequired
};


export default Card;

