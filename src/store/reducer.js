import {DEFAULT_CITY} from "../const/const";
import {ActionType} from "../store/action";


const initialState = {
  cityName: DEFAULT_CITY,
  propertyes: [],
  sortType: `Popular`
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
        propertyes: action.payload,
      };

    case ActionType.SORTING:
      return {
        ...state,
        sortType: action.payload,
      };

    case ActionType.SORT_PROPERTYES:
      return {
        ...state,
        propertyes: action.payload,
      };

    default: return state;
  }
};


export {reducer};
