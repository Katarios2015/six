import {ActionType} from "../action";

const initialState = {
  offer: {},
  isOfferDataLoaded: false,
};

const loadProperty = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.LOAD_OFFER: {
      return {
        ...state,
        offer: action.payload,
        isOfferDataLoaded: true,
      };
    }
    default: {
      return state;
    }
  }
};

export {loadProperty};
