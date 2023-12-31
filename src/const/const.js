
import PropTypes from 'prop-types';

const CARD_PROP_TYPES = PropTypes.shape({
  bedrooms: PropTypes.number,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number,
    }),
    name: PropTypes.string,
  }),
  description: PropTypes.string,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string,
  }),
  id: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string),
  isFavorite: PropTypes.bool,
  isPremium: PropTypes.bool,
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }),
  maxAdults: PropTypes.number,
  previewImage: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
});

const REVIEW_PROP_TYPES = PropTypes.shape({
  comment: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.number,
  rating: PropTypes.number,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string
  })
});

const DEFAULT_CITY = `Paris`;
const ONE_RATE_STAR_PERCENT = 20;

const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

const SORT_TYPES = [
  `Popular`, `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
];

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const APP_ROUTE = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER_ID: `/offer/:id`,
  COMMENTS: `/comments`
};

const API_ROUTE = {
  LOGIN: `/login`,
  HOTELS: `/hotels`,
  FAVORITE: `/favorite`,
  COMMENTS: `/comments`
};

export {CARD_PROP_TYPES, REVIEW_PROP_TYPES, DEFAULT_CITY, cities, SORT_TYPES, ONE_RATE_STAR_PERCENT, AuthorizationStatus, API_ROUTE, APP_ROUTE};
