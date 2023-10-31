import React from "react";
import PropTypes from 'prop-types';
import {cityOnChange} from "../../store/action";
import {connect} from 'react-redux';

const CitiesList = (props) => {
  const {cities, cityName, cityOnChange} = props;
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, index) => {
        return (
          <li key={index} className="locations__item">
            <a className={city === cityName ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`} href="#"
              onClick={()=> {
                cityOnChange(city);
              }}
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
  cityName: state.cityName,
});

const mapDispatchToProps = (dispatch) => ({
  cityOnChange(city) {
    dispatch(cityOnChange(city));
  },
});


CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  cityName: PropTypes.string.isRequired,
  cityOnChange: PropTypes.func.isRequired,
};

export {CitiesList};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
