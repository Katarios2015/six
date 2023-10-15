import {getFiltredByCityOffers} from "../../src/filter";
const ActionType = {
  CITY_ON_CHANGE: `city/CITY_ON_CHANGE`,
  ADD_PROPERTYES: `property/ADD_PROPERTYES`,
  SORTING: `sort/SORTING`,
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
};

export {ActionType, ActionCreator};
