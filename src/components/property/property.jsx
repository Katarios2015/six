import React from "react";
import {useEffect} from 'react';
import {connect} from 'react-redux';
// import {useSelector, useDispatch} from 'react-redux';
import {Link, useParams} from "react-router-dom";
import PropTypes from "prop-types";
import {CARD_PROP_TYPES, REVIEW_PROP_TYPES, ONE_RATE_STAR_PERCENT, APP_ROUTE} from "../../const/const";
import ReviewForm from "../review-form/review-form";
import ReviewesList from "../reviewes-list/reviewes-list";
import ImagesList from "../property-images-list/property-images-list";
// import {Map} from '../map/map';
// import CardsList from '../cards-list/cards-list';
import {fetchOffer, fetchComments, checkAuth, addFavorite} from "../../store/action-api";
import Loading from "../loading/loading";
import {getOfferId, addComment, changeFavoriteStatus, redirectToRoute} from "../../store/action";

import {getEmail} from "../../store/auth-data/selectors";
import {getAuthStatus} from "../../store/auth-check/selectors";
import {getComment} from "../../store/add-comment/selectors";
import {getOffer, getOfferDataLoaded} from "../../store/load-property/selectors";
import {getComments, getCommentsLoaded} from "../../store/load-comments/selectors";

import {getUrlId} from "../../store/offer-id/selectors";
import {getFavoriteStatus} from "../../store/add-favorite-status/selectors";
// import {getStatus} from "../../utils/favorite-status";

const Property = (props) => {
  const {offer, comments, authorizationStatus, isOfferDataLoaded, offerId, isCommentsLoaded, email, onLoadOfferData, onLoadComments, isAuth, comment, bookMarkOnClick, redirect} = props;

  const {bedrooms, description, goods, host, isPremium, isFavorite,
    maxAdults, price, rating, title, type} = offer;

  const rateWidth = Number(Math.round(rating) * ONE_RATE_STAR_PERCENT);
  const urlParams = useParams();

  const urlId = Number(urlParams.id);

  useEffect(() => {
    isAuth();
    offerId(urlId);
  }, []);

  useEffect(() => {
    if (!isOfferDataLoaded) {
      onLoadOfferData();
    }
  }, [isOfferDataLoaded]);

  useEffect(() => {
    onLoadComments();
  }, [isCommentsLoaded, comment]);


  if (!isOfferDataLoaded) {
    return (
      <Loading />
    );
  }


  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={APP_ROUTE.MAIN} className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authorizationStatus ?
                  <li className="header__nav-item user">
                    <Link to={APP_ROUTE.FAVORITES} className="header__nav-link header__nav-link--profile" >
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{email}</span>
                    </Link>
                  </li> :
                  <li className="header__nav-item user">
                    <Link to={APP_ROUTE.LOGIN} className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <ImagesList propertyItem={offer}/>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? <div className="property__mark">
                <span>Premium</span>
              </div> : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button onClick={() => {
                  if (authorizationStatus) {
                    let status = 0;
                    if (isFavorite) {
                      status = 0;
                    } else {
                      status = 1;
                    }
                    bookMarkOnClick(status, urlId);
                  } else {
                    redirect();
                  }
                }}
                className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rateWidth}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                      Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, index) => {
                    return (
                      <li key={index} className="property__inside-item">
                        {good}
                      </li>
                    );
                  }) }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro ? `Pro` : ``}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewesList reviews={comments.slice(0, 10)}/>
                {authorizationStatus ? <ReviewForm/> : ``}
              </section>
            </div>
          </div>
          <section className="property__map map">
            { /* <Map mapOffers={offers}/>*/}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            { /* <CardsList offers={offers} items={offers.slice(0, 3)} nearbyFlag={true}/>*/}
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  offer: getOffer(state),
  isOfferDataLoaded: getOfferDataLoaded(state),
  authorizationStatus: getAuthStatus(state),
  email: getEmail(state),
  comments: getComments(state),
  isCommentsLoaded: getCommentsLoaded(state),
  comment: getComment(state),
  urlId: getUrlId(state),
  status: getFavoriteStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOfferData() {
    dispatch((fetchOffer()));
  },
  onLoadComments() {
    dispatch((fetchComments()));
  },
  isAuth() {
    dispatch((checkAuth()));
  },
  offerId(urlId) {
    dispatch(getOfferId(urlId));
  },
  addComment(comment) {
    dispatch(addComment(comment));
  },
  bookMarkOnClick(toggle, urlId) {
    dispatch(changeFavoriteStatus(toggle));
    dispatch(addFavorite(urlId, toggle));
  },
  redirect() {
    dispatch(redirectToRoute(APP_ROUTE.LOGIN));
  }
});

Property.propTypes = {
  comments: PropTypes.arrayOf(REVIEW_PROP_TYPES),
  // offers: PropTypes.arrayOf(CARD_PROP_TYPES),
  offer: CARD_PROP_TYPES.isRequired,
  isOfferDataLoaded: PropTypes.bool.isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired,
  onLoadOfferData: PropTypes.func.isRequired,
  onLoadComments: PropTypes.func.isRequired,
  isAuth: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
  email: PropTypes.string,
  addComment: PropTypes.func.isRequired,
  comment: PropTypes.obj,
  offerId: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired,
  bookMarkOnClick: PropTypes.func.isRequired,
  redirect: PropTypes.func.isRequired
};

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);
