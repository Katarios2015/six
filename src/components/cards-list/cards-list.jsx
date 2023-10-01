import React, {useState} from "react";
import CardNearby from "../card-nearby/card-nearby";
import CardCities from "../card-cities/card-cities";
import PropTypes from 'prop-types';
import {CARD_PROP_TYPES} from '../../const/const';

import {ActionCreator} from "../../store/action";
import {connect} from 'react-redux';

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
  const {propertyes, nearbyFlag} = props;
  const [, setActiveCard] = useState(null);
  const handleCardMouseOver = (item) => {
    setActiveCard(item);
  };

  const handleCardMouseOut = () => {
    setActiveCard(null);
  };
  return (
    <div className={`places__list ${nearbyFlag === false ? `cities__places-list  tabs__content` : `near-places__list`}`}>
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
});

const mapDispatchToProps = (dispatch) => ({
  addPropertyes(propertyes) {
    dispatch(ActionCreator.addPropertyes(propertyes));
  },
});

CardsList.propTypes = {
  propertyes: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired,
  nearbyFlag: PropTypes.bool.isRequired
};

export {CardsList};
export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
