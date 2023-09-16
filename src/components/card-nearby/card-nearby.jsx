import React from "react";
import Card from "../card/card";
import PropTypes from "prop-types";

const CardNearby = (props) => {
  const {className = ``, classNameWrapper = ``} = props;
  const restProps = Object.assign({}, props);
  delete restProps.className;
  delete restProps.classNameWrapper;

  return (
    <Card
      className = {`near-places__card ${className}`}
      classNameWrapper = {`near-places__image-wrapper ${classNameWrapper}`}
      {...restProps}
    />
  );


};

CardNearby.propTypes = {
  // nearbyFlagCard: PropTypes.bool.isRequired
  className: PropTypes.string.isRequired,
  classNameWrapper: PropTypes.string.isRequired,
};

export default CardNearby;
