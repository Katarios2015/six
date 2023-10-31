import {ActionType} from "../action";

const initialState = {
  sortType: `Popular`,
};

const sorting = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SORTING: {
      return {
        ...state,
        sortType: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export {sorting};
