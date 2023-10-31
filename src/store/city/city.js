import {ActionType} from "../action";
import {DEFAULT_CITY} from "../../const/const";

const initialState = {
  cityName: DEFAULT_CITY,
};

const city = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CITY_ON_CHANGE: {
      return {
        ...state,
        cityName: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export {city};
