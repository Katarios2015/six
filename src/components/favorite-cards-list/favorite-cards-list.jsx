import React from "react";
import FavoriteCard from "../favorite-card/favorite-card";
import PropTypes from 'prop-types';
import {CARD_PROP_TYPES} from '../../const/const';

const FavoriteCardsList = (props) => {
  const {items} = props;
  return (
    items.map((card) => {
      return (
        <li className="favorites__locations-items" key={card.id}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{card.city.name}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {items.map((offer)=> {
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
