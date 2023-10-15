const getSortedCards = (filtredOffers, sortType) => {
  switch (sortType) {
    case `Price: low to high`:
      return filtredOffers.slice().sort((a, b)=> {
        const priceHigh = b.price;
        const priceLow = a.price;
        return priceLow - priceHigh;
      });

    case `Price: high to low`:
      return filtredOffers.slice().sort((a, b)=> {
        const priceHigh = b.price;
        const priceLow = a.price;
        return priceHigh - priceLow;
      });

    case `Top rated first`:
      return filtredOffers.slice().sort((a, b)=> {
        const rateHigh = b.rating;
        const rateLow = a.rating;
        return rateHigh - rateLow;
      });

    default: return filtredOffers;
  }
};

const getFiltredByCityOffers = (cityName, offers, sortType) => {
  const filtredByCityOffers = offers.filter((offer) => offer.city.name === cityName);
  const filtredPropertyes = getSortedCards(filtredByCityOffers, sortType);
  return filtredPropertyes;
};

export {getFiltredByCityOffers};
