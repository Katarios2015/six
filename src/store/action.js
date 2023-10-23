import {getFiltredByCityOffers} from "../../src/filter";
const ActionType = {
  CITY_ON_CHANGE: `city/CITY_ON_CHANGE`,
  ADD_PROPERTYES: `property/ADD_PROPERTYES`,
  SORTING: `sort/SORTING`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  AUTHORIZATION_DATA: `user/authData`,
  REDIRECT_TO_ROUTE: `main/redirectToRoute`,
};


const ActionCreator = {
  cityOnChange: (cityName) => ({
    type: ActionType.CITY_ON_CHANGE,
    payload: cityName
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
  })
};

export {ActionType, ActionCreator};
