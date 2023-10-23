import {DEFAULT_CITY, AuthorizationStatus} from "../const/const";
import {ActionType} from "../store/action";


const initialState = {
  cityName: DEFAULT_CITY,
  propertyes: [],
  sortType: `Popular`,
  offers: [],
  isDataLoaded: false,
  authorizationStatus: false,
  email: ``,
  avatarUrl: ``,
  isPro: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CITY_ON_CHANGE: {
      return {
        ...state,
        cityName: action.payload,
      };
    }
    case ActionType.ADD_PROPERTYES: {
      return {
        ...state,
        propertyes: action.payload,
      };
    }
    case ActionType.SORTING: {
      return {
        ...state,
        sortType: action.payload,
      };
    }
    case ActionType.LOAD_OFFERS: {
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    }
    case ActionType.REQUIRED_AUTHORIZATION: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }
    case ActionType.AUTHORIZATION_DATA: {
      return {
        ...state,
        email: action.payload.email,
        avatarUrl: action.payload.avatarUrl,
        isPro: action.payload.isPro,
      };
    }
    default: {
      return state;
    }
  }
};


export {reducer};
