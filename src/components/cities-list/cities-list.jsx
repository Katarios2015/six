import React, {useCallback} from "react";
import PropTypes from 'prop-types';
import {cityOnChange} from "../../store/action";
import {connect} from 'react-redux';
import {getCityName} from "../../store/city/selectors";

const CitiesList = (props) => {
  const {cities, cityName, cityOnClick} = props;


  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, index) => {
        return (
          <li key={index} className="locations__item">
            <a className={city === cityName ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} href="#"
              onClick={useCallback(()=> {
                cityOnClick(city);
              }, [cityName])}
            >
              <span>{city}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  cityName: getCityName(state),
});

const mapDispatchToProps = (dispatch) => ({
  cityOnClick(city) {
    dispatch(cityOnChange(city));
  },
});

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  cityName: PropTypes.string.isRequired,
  cityOnClick: PropTypes.func.isRequired,
};

export {CitiesList};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
