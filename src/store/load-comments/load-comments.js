import {ActionType} from "../action";

const initialState = {
  comments: [],
  isCommentsLoaded: false,
};

const loadCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS: {
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true,
      };
    }
    default: {
      return state;
    }
  }
};

export {loadCommentsReducer};
