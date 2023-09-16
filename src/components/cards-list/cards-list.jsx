import React, {useState} from "react";

import Card from "../card/card";
import CardNearby from "../card-nearby/card-nearby";
import CardCities from "../card-cities/card-cities";
import PropTypes from 'prop-types';
import {CARD_PROP_TYPES} from '../../const/const';

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
  const {items, nearbyFlag} = props;
  const [activeCard, setActiveCard] = useState(null);
  const handleCardMouseOver = (item) => {
    setActiveCard(item);
  };

  const handleCardMouseOut = () => {
    setActiveCard(null);
  };
  console.log(activeCard);
  return (
    <div className={`places__list ${nearbyFlag === false ? `cities__places-list  tabs__content` : `near-places__list`}`}>
      {items.map((offer) => {
        return (
          getCardByNearbyFlag(nearbyFlag, offer, handleCardMouseOver, handleCardMouseOut)
        );
      })}
    </div>

  );
};

CardsList.propTypes = {
  items: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired,
  nearbyFlag: PropTypes.bool
};

export default CardsList;
