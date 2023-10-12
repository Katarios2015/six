import {getFiltredByCityOffers} from "../../src/filter";
import {getSortedCards} from "../store/sort";
const ActionType = {
  CITY_ON_CHANGE: `city/CITY_ON_CHANGE`,
  ADD_PROPERTYES: `property/ADD_PROPERTYES`,
  SORTING: `sort/SORTING`,
  SORT_PROPERTYES: `sort/SORT_PROPERTYES`,
};


const ActionCreator = {
  cityOnChange: (cityName) => ({
    type: ActionType.CITY_ON_CHANGE,
    payload: cityName
  }),
  addPropertyes: (cityName, offers) => ({
    type: ActionType.ADD_PROPERTYES,
    payload: getFiltredByCityOffers(cityName, offers)
  }),
  sort: (sortType) => ({
    type: ActionType.SORTING,
    payload: sortType,
  }),
  sortedPropertyes: (propertyes, sortType) => ({
    type: ActionType.SORT_PROPERTYES,
    payload: getSortedCards(propertyes, sortType),
  }),
};

export {ActionType, ActionCreator};
