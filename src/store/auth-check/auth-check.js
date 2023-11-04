import {ActionType} from "../action";

const initialState = {
  authorizationStatus: false,
};

const checkAuth = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export {checkAuth};
