import {ActionType} from "../action";

const initialState = {
  item: {}
};

const updatedOffer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_OFFER: {
      return {
        ...state,
        item: action.payload,
        id: action.payload.id,
        isFavorite: action.payload.isFavorite,
      };
    }
    default: {
      return state;
    }
  }
};

export {updatedOffer};
