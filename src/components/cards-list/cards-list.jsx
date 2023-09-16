import React, {useState} from "react";

import Card from "../card/card";
import PropTypes from 'prop-types';
import {CARD_PROP_TYPES} from '../../const/const';

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
          <Card
            item={offer}
            key={offer.id}
            onMouseOver={handleCardMouseOver}
            onMouseOut={handleCardMouseOut}
            nearbyFlagCard = {nearbyFlag}
          />
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
