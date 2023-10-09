import {getFiltredByCityOffers} from "../../src/filter";
const ActionType = {
  CITY_ON_CHANGE: `city/CITY_ON_CHANGE`,
  ADD_PROPERTYES: `property/ADD_PROPERTYES`,
};


const ActionCreator = {
  cityOnChange: (cityName) => ({
    type: ActionType.CITY_ON_CHANGE,
    payload: cityName
  }),
  addPropertyes: (cityName, offers) => ({
    type: ActionType.ADD_PROPERTYES,
    payload: getFiltredByCityOffers(cityName, offers)
  })
};

export {ActionType, ActionCreator};
