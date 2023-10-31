import {ActionType} from "../action";

const initialState = {
  propertyes: [],
};

const propertyes = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_PROPERTYES: {
      return {
        ...state,
        propertyes: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export {propertyes};
