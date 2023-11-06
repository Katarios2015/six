import {ActionType} from "../action";

const initialState = {
  isFavorite: false
};

const isFavoriteStatus = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.IS_FAVORITE_STATUS: {
      return {
        ...state,
        isFavorite: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export {isFavoriteStatus};
