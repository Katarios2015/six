import React, {useState} from "react";
import CardNearby from "../card-nearby/card-nearby";
import CardCities from "../card-cities/card-cities";
import PropTypes from 'prop-types';
import {CARD_PROP_TYPES} from '../../const/const';
import {ActionCreator} from "../../store/action";
import {connect} from 'react-redux';
import {useEffect} from 'react';

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
  const {offers, nearbyFlag, cityName, propertyes, sortType, addPropertyes, sortedPropertyes, handleCardMouseOver, handleCardMouseOut} = props;

  if (sortType === `Popular`) {
    useEffect(() => {
      addPropertyes(cityName, offers);
    }, [cityName]);
  } else {
    useEffect(()=> {
      sortedPropertyes(propertyes, sortType);
    }, [sortType]);
  }

  useEffect(() => {
    addPropertyes(cityName, offers);
  }, [cityName]);

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
  propertyes: state.propertyes,
  cityName: state.cityName,
  sortType: state.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  addPropertyes(cityName, offers) {
    dispatch(ActionCreator.addPropertyes(cityName, offers));
  },

  sortedPropertyes(prev, propertyes, sortType) {
    dispatch(ActionCreator.sortedPropertyes(prev, propertyes, sortType));
  },
});

CardsList.propTypes = {
  propertyes: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired,
  offers: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired,
  nearbyFlag: PropTypes.bool.isRequired,
  cityName: PropTypes.string.isRequired,
  addPropertyes: PropTypes.func.isRequired,
  sortedPropertyes: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};

export {CardsList};
export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
