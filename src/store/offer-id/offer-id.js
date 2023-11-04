import {ActionType} from "../action";

const initialState = {
  urlId: ``,
};

const offerId = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.GET_OFFER_ID: {
      return {
        ...state,
        urlId: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export {offerId};
