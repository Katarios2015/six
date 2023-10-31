import React from "react";
import PropTypes from "prop-types";
import {CARD_PROP_TYPES, ONE_RATE_STAR_PERCENT} from "../../const/const";
import {Link} from "react-router-dom";


const Card = (props) => {
  const {item, onMouseOver, onMouseOut, className, classNameWrapper, nearbyFlagCard} = props;
  const {id, isPremium, isFavorite, rating, price, previewImage, title, type} = item;
  const rateWidth = Number(Math.round(rating) * ONE_RATE_STAR_PERCENT);
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
      className={`place-card ${className}`}>
      <div className={isPremium ? `place-card__mark` : ``}>
        <span>{isPremium ? `Premium` : ``}</span>
      </div>
      <div className={`place-card__image-wrapper ${classNameWrapper}`}>
        <Link
          to={`${nearbyFlagCard === false ? `offer/${id}` : `${id}`}`} target="_blank"
        >
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place image" />
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
            <span style={{width: `${rateWidth}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`${nearbyFlagCard === false ? `offer/${id}` : `${id}`}`} target="_blank"
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  item: CARD_PROP_TYPES.isRequired,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  nearbyFlagCard: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  classNameWrapper: PropTypes.string.isRequired,
};


export default Card;

