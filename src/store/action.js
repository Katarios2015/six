import {getFiltredByCityOffers} from "../../src/utils/filter";
import {getStatus} from "../../src/utils/favorite-status";

const ActionType = {
  CITY_ON_CHANGE: `city/CITY_ON_CHANGE`,
  GET_OFFER_ID: `card/GET_OFFER_ID`,
  ADD_PROPERTYES: `property/ADD_PROPERTYES`,
  SORTING: `sort/SORTING`,
  LOAD_OFFERS: `data/loadOffers`,
  LOAD_OFFER: `data/loadOffer`,
  LOAD_FAVORITE_OFFERS: `data/loadFavoriteOffers`,
  LOAD_COMMENTS: `data/loadComments`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  AUTHORIZATION_DATA: `user/authData`,
  REDIRECT_TO_ROUTE: `main/redirectToRoute`,
  ADD_COMMENT: `offer/addComment`,
  CHANGE_STATUS: `offer/changeFavoriteStatus`,
};

const cityOnChange = (cityName) => ({
  type: ActionType.CITY_ON_CHANGE,
  payload: cityName
});

const getOfferId = (urlId) => ({
  type: ActionType.GET_OFFER_ID,
  payload: urlId,
});
const sort = (sortType) => ({
  type: ActionType.SORTING,
  payload: sortType,
});

const addPropertyes = (cityName, offers, sortType) => ({
  type: ActionType.ADD_PROPERTYES,
  payload: getFiltredByCityOffers(cityName, offers, sortType)
});

const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

const loadFavoriteOffers = (favoriteOffers) => ({
  type: ActionType.LOAD_FAVORITE_OFFERS,
  payload: favoriteOffers,
});

const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer,
});

const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
});

const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

const authData = (data) => ({
  type: ActionType.AUTHORIZATION_DATA,
  payload: data,
});

const addComment = (comment)=>({
  type: ActionType.ADD_COMMENT,
  payload: comment,
});

const changeFavoriteStatus = (status) =>({
  type: ActionType.CHANGE_STATUS,
  payload: status,
});

export {ActionType,
  cityOnChange,
  getOfferId,
  sort,
  addPropertyes,
  loadOffers,
  loadFavoriteOffers,
  loadOffer,
  loadComments,
  requireAuthorization,
  redirectToRoute,
  authData,
  addComment,
  changeFavoriteStatus};
