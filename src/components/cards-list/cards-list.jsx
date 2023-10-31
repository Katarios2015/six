import React from "react";
import CardNearby from "../card-nearby/card-nearby";
import CardCities from "../card-cities/card-cities";
import PropTypes from 'prop-types';
import {CARD_PROP_TYPES} from '../../const/const';
import {addPropertyes} from "../../store/action";
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
  const {offers, nearbyFlag, cityName, propertyes, sortType, addPropertyes, handleCardMouseOver, handleCardMouseOut} = props;

  useEffect(() => {
    addPropertyes(cityName, offers, sortType);
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
  propertyes: state.propertyes,
  cityName: state.cityName,
  sortType: state.sortType,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  addPropertyes(cityName, offers, sortType) {
    dispatch(addPropertyes(cityName, offers, sortType));
  },
});

CardsList.propTypes = {
  propertyes: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired,
  offers: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired,
  nearbyFlag: PropTypes.bool.isRequired,
  cityName: PropTypes.string.isRequired,
  addPropertyes: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  handleCardMouseOver: PropTypes.func,
  handleCardMouseOut: PropTypes.func,
};

export {CardsList};
export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
