import React from "react";
import Card from "../card/card";
import PropTypes from "prop-types";

const CardCities = (props) => {
  const {className = ``, classNameWrapper = ``} = props;
  const restProps = Object.assign({}, props);
  delete restProps.className;
  delete restProps.classNameWrapper;

  return (
    <Card
      className = {`cities__place-card ${className}`}
      classNameWrapper = {`cities__image-wrapper ${classNameWrapper}`}
      {...restProps}
    />
  );


};

CardCities.propTypes = {
  className: PropTypes.string.isRequired,
  classNameWrapper: PropTypes.string.isRequired,
};

export default CardCities;
