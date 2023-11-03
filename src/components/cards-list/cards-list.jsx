import React from "react";
import CardNearby from "../card-nearby/card-nearby";
import CardCities from "../card-cities/card-cities";
import PropTypes from 'prop-types';
import {CARD_PROP_TYPES} from '../../const/const';
import {addPropertyes} from "../../store/action";
import {connect} from 'react-redux';
import {useEffect} from 'react';

import {getPropertyes} from "../../store/add-propertyes/selectors";
import {getCityName} from "../../store/city/selectors";
import {getSortType} from "../../store/sort/selectors";
import {getOffers} from "../../store/load-offers/selectors";


const getCardByNearbyFlag = (flag, offer, handleCardMouseOver, handleCardMouseOut) => {

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
        nearbyFlagCard = {flag}
      />);
  }
};


const CardsList = (props) => {
  const {offers, nearbyFlag, cityName, propertyes, sortType, sortOffers, handleCardMouseOver, handleCardMouseOut} = props;

  useEffect(() => {
    sortOffers(cityName, offers, sortType);
  }, [cityName, sortType]);

  return (
    <div className={`places__list ${nearbyFlag === false ? `cities__places-list  tabs__content` : `near-places__list`}`}
    >
      {propertyes.map((offer) => {
        return (
          getCardByNearbyFlag(nearbyFlag, offer, handleCardMouseOver, handleCardMouseOut)
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
});

const mapDispatchToProps = (dispatch) => ({
  sortOffers(cityName, offers, sortType) {
    dispatch(addPropertyes(cityName, offers, sortType));
  },
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
};

export {CardsList};
export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
