import {ActionType} from "../action";

const initialState = {
  email: ``,
  avatarUrl: ``,
  isPro: false,
};

const authData = (state = initialState, action) => {
  switch (action.type) {
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

export {authData};
