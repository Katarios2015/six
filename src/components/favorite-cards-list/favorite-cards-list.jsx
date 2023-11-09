import React from "react";
import FavoriteCard from "../favorite-card/favorite-card";
import PropTypes from 'prop-types';
import {CARD_PROP_TYPES} from '../../const/const';

const FavoriteCardsList = (props) => {
  const {items} = props;
  const favoriteCities = items.map((item)=> {
    const city = item.city.name;
    return city;
  });
  const newSet = new Set(favoriteCities);
  const uniqCities = Array.from(newSet);

  const getFiltred = (array, filter) => {
    let offers = array.filter((item) => item.city.name === filter);
    return offers;
  };

  return (
    uniqCities.map((cityName, index) => {
      return (
        <li className="favorites__locations-items" key={index}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{cityName}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {
              getFiltred(items, cityName).map((offer)=> {
                return (
                  <FavoriteCard favoriteItem={offer} key={offer.id}/>
                );
              })}
          </div>
        </li>
      );
    })
  );
};


FavoriteCardsList.propTypes = {
  items: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired
};


export default FavoriteCardsList;
