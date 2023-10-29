import {getFiltredByCityOffers} from "../../src/filter";
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
};


const ActionCreator = {
  cityOnChange: (cityName) => ({
    type: ActionType.CITY_ON_CHANGE,
    payload: cityName
  }),

  getOfferId: (urlId) => ({
    type: ActionType.GET_OFFER_ID,
    payload: urlId
  }),

  sort: (sortType) => ({
    type: ActionType.SORTING,
    payload: sortType,
  }),

  addPropertyes: (cityName, offers, sortType) => ({
    type: ActionType.ADD_PROPERTYES,
    payload: getFiltredByCityOffers(cityName, offers, sortType)
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),

  loadFavoriteOffers: (favoriteOffers) => ({
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload: favoriteOffers,
  }),

  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),

  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),

  authData: (data) => ({
    type: ActionType.AUTHORIZATION_DATA,
    payload: data,
  }),

  addComment: (comment)=>({
    type: ActionType.ADD_COMMENT,
    payload: comment,
  }),
};

export {ActionType, ActionCreator};
