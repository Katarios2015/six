import React from "react";
// import PropTypes from 'prop-types';
import {CARD_PROP_TYPES, ONE_RATE_STAR_PERCENT} from "../../const/const";


const FavoriteCard = (props) => {
  const {favoriteItem} = props;
  const {isPremium, price, images, title, type, rating} = favoriteItem;
  const rateWidth = Number(Math.round(rating) * ONE_RATE_STAR_PERCENT);
  return (
    <article className="favorites__card place-card">
      <div className={isPremium ? `place-card__mark` : ``}>
        <span>{isPremium ? `Premium` : ``}</span>
      </div>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={images[0]} width={150} height={110} alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rateWidth}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

FavoriteCard.propTypes = {
  favoriteItem: CARD_PROP_TYPES.isRequired,
};


export default FavoriteCard;
