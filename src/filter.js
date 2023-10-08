export const getFiltredByCityOffers = (cityName, offers) => {
  const filtredByCityOffers = offers.filter((offer) => offer.city.name === cityName);
  return filtredByCityOffers;
};
