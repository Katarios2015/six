import {ActionType} from "../action";

const initialState = {
  favoriteOffers: [],
  isFavoriteDataLoaded: false,
};

const loadFavoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITE_OFFERS: {
      return {
        ...state,
        favoriteOffers: action.payload,
        isFavoriteDataLoaded: true,
      };
    }
    default: {
      return state;
    }
  }
};

export {loadFavoritesReducer};
