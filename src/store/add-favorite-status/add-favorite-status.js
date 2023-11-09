import {ActionType} from "../action";

const initialState = {
  status: 0,
};

const addFavoriteStatus = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_STATUS: {
      return {
        ...state,
        status: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export {addFavoriteStatus};
