import {ActionType} from "../action";

const initialState = {
  comment: {},
};

const addCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_COMMENT: {
      return {
        ...state,
        comment: action.payload,
        name: action.payload.name,
        avatarUrl: action.payload.user.avatarUrl,
        isPro: action.payload.isPro,
      };
    }
    default: {
      return state;
    }
  }
};

export {addCommentReducer};
