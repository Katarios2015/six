import React, {useCallback} from "react";
import CardNearby from "../card-nearby/card-nearby";
import CardCities from "../card-cities/card-cities";
import PropTypes from 'prop-types';
import {CARD_PROP_TYPES, APP_ROUTE} from '../../const/const';
import {addPropertyes, redirectToRoute} from "../../store/action";
import {connect} from 'react-redux';
import {useEffect, memo} from 'react';

import {checkAuth, addFavoriteOnMain} from "../../store/action-api";
import {getAuthStatus} from "../../store/auth-check/selectors";
import {getPropertyes} from "../../store/add-propertyes/selectors";
import {getCityName} from "../../store/city/selectors";
import {getSortType} from "../../store/sort/selectors";
import {getOffers, getDataLoaded} from "../../store/load-offers/selectors";
import {getItem} from "../../store/update-property/selectors";


const getCardByNearbyFlag = (flag, offer, handleCardMouseOver, handleCardMouseOut, handleBookmarkClick) => {

  if (flag) {
    return (
      <CardNearby
        className = {``}
        classNameWrapper = {``}
        item={offer}
        key={offer.id}
        onMouseOver={handleCardMouseOver}
        onMouseOut={handleCardMouseOut}
        nearbyFlagCard = {flag}
      />);
  } else {
    return (
      <CardCities
        className = {``}
        classNameWrapper = {``}
        item={offer}
        key={offer.id}
        onMouseOver={handleCardMouseOver}
        onMouseOut={handleCardMouseOut}
        onChangeFavorite={handleBookmarkClick}
        nearbyFlagCard = {flag}
      />);
  }
};


const CardsList = (props) => {
  const {offers, nearbyFlag, cityName, propertyes, sortType, sortOffers, handleCardMouseOver, handleCardMouseOut, authorizationStatus, isAuth, changeFavoriteOnMain, redirect, item} = props;

  const handleBookmarkClick = useCallback((id) => {
    if (authorizationStatus) {
      changeFavoriteOnMain(id);
    } else {
      redirect();
    }
  });

  useEffect(() => {
    isAuth();
  }, []);

  useEffect(() => {
    sortOffers(cityName, offers, sortType);
  }, [cityName, sortType, offers]);


  return (
    <div className={`places__list ${nearbyFlag === false ? `cities__places-list  tabs__content` : `near-places__list`}`}
    >
      {propertyes.map((offer) => {
        return (
          getCardByNearbyFlag(nearbyFlag, offer, handleCardMouseOver, handleCardMouseOut, handleBookmarkClick)
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  propertyes: getPropertyes(state),
  cityName: getCityName(state),
  sortType: getSortType(state),
  offers: getOffers(state),
  authorizationStatus: getAuthStatus(state),
  item: getItem(state),
  isDataLoaded: getDataLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  isAuth() {
    dispatch((checkAuth()));
  },
  changeFavoriteOnMain(id) {
    dispatch((addFavoriteOnMain(id)));
  },
  sortOffers(cityName, offers, sortType) {
    dispatch(addPropertyes(cityName, offers, sortType));
  },
  redirect() {
    dispatch(redirectToRoute(APP_ROUTE.LOGIN));
  }
});

CardsList.propTypes = {
  propertyes: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired,
  offers: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired,
  nearbyFlag: PropTypes.bool.isRequired,
  cityName: PropTypes.string.isRequired,
  sortOffers: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  handleCardMouseOver: PropTypes.func,
  handleCardMouseOut: PropTypes.func,
  authorizationStatus: PropTypes.bool.isRequired,
  isAuth: PropTypes.func,
  redirect: PropTypes.func.isRequired,
  changeFavoriteOnMain: PropTypes.func,
  item: PropTypes.object,
  isDataLoaded: PropTypes.bool.isRequired,
};

export {CardsList};
export default connect(mapStateToProps, mapDispatchToProps)(memo(CardsList));
