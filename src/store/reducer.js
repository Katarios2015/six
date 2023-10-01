import {DEFAULT_CITY} from "../const/const";
import {offers} from "../mocks/offers";
import {ActionType} from "../store/action";


const initialState = {
  cityName: DEFAULT_CITY,
  propertyes: offers.filter((offer) => offer.city.name === DEFAULT_CITY),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CITY_ON_CHANGE:
      return {
        ...state,
        cityName: action.payload,
      };
    case ActionType.ADD_PROPERTYES:
      return {
        ...state,
        propertyes: offers.action.payload,
      };

    default: return state;
  }
};


export {reducer};
