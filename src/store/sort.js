// import React, {useEffect, useRef} from 'react';

const getSortedCards = (propertyes, sortType) => {

  const sortTypes = {
    'Popular': propertyes,
    'Price: low to high': propertyes.slice().sort((a, b)=> {
      const priceHigh = b.price;
      const priceLow = a.price;
      return priceLow - priceHigh;
    }),
    'Price: high to low': propertyes.slice().sort((a, b)=> {
      const priceHigh = b.price;
      const priceLow = a.price;
      return priceHigh - priceLow;
    }),
    'Top rated first': propertyes.slice().sort((a, b)=> {
      const rateHigh = b.rating;
      const rateLow = a.rating;
      return rateHigh - rateLow;
    })
  };

  return sortTypes[sortType];
};

export {getSortedCards};
