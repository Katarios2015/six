import React, {useState} from "react";

import Card from "../card/card";
import PropTypes from 'prop-types';
import {CARD_PROP_TYPES} from '../../const/const';

const CardsList = (props) => {
  const {items} = props;
  const [activeCard, setActiveCard] = useState(null);
  const handleCardMouseOver = (item) => {
    setActiveCard(item);
  };

  const handleCardMouseOut = () => {
    setActiveCard(null);
  };
console.log(activeCard);
  return (
    <div className="cities__places-list places__list tabs__content">
      {items.map((offer) => {
        return (
          <Card
            item={offer}
            key={offer.id}
            onMouseOver={handleCardMouseOver}
            onMouseOut={handleCardMouseOut}
          />
        );
      })}
    </div>

  );
};

CardsList.propTypes = {
  items: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired
};

export default CardsList;
