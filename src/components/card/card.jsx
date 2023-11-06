import React, {memo} from "react";
import {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {CARD_PROP_TYPES, ONE_RATE_STAR_PERCENT, APP_ROUTE} from "../../const/const";
import {Link} from "react-router-dom";
import {getAuthStatus} from "../../store/auth-check/selectors";
import {checkAuth, addFavoriteOnMain} from "../../store/action-api";
import {changeFavoriteStatus, redirectToRoute, getOfferId} from "../../store/action";

import {getUrlId} from "../../store/offer-id/selectors";

const Card = (props) => {
  const {item, onMouseOver, onMouseOut, className, classNameWrapper, nearbyFlagCard, bookMarkOnClick, isAuth, authorizationStatus, redirect, offerId} = props;
  const {id, isPremium, isFavorite, rating, price, previewImage, title, type} = item;
  const rateWidth = Number(Math.round(rating) * ONE_RATE_STAR_PERCENT);

  useEffect(() => {
    isAuth();
  }, []);

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
          <button
            onClick={() => {
              if (authorizationStatus) {
                let status = 0;
                if (isFavorite) {
                  status = 0;
                } else {
                  status = 1;
                }
                offerId(id);
                bookMarkOnClick(status);
              } else {
                redirect();
              }
            }}
            className={isFavorite ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`}type="button">
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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  isAuth() {
    dispatch((checkAuth()));
  },
  offerId(urlId) {
    dispatch(getOfferId(urlId));
  },
  bookMarkOnClick(status) {
    dispatch(changeFavoriteStatus(status));
    dispatch(addFavoriteOnMain(status));
  },
  redirect() {
    dispatch(redirectToRoute(APP_ROUTE.LOGIN));
  }
});

Card.propTypes = {
  item: CARD_PROP_TYPES.isRequired,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  nearbyFlagCard: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  classNameWrapper: PropTypes.string.isRequired,
};


export {Card};
export default connect(mapStateToProps, mapDispatchToProps)(memo(Card));
