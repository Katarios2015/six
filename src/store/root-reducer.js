import {combineReducers} from 'redux';

import {loadFavoritesReducer} from "./load-favorite-offers/load-favorite-offers";
import {authData} from "./auth-data/auth-data";
import {city} from "./city/city";

import {checkAuth} from "./auth-check/auth-check";
import {propertyes} from "./add-propertyes/add-propertyes";
import {addCommentReducer} from "./add-comment/add-comment";
import {loadCommentsReducer} from "./load-comments/load-comments";
import {loadOffersReducer} from "./load-offers/load-offers";

import {sorting} from "./sort/sort";
import {offerId} from "./offer-id/offer-id";
import {loadProperty} from "./load-property/load-property";

const NameSpace = {
  OFFERS: `OFFERS`,
  AUTH_DATA: `AUTH_DATA`,
  CHECK_AUTH: `CHECK_AUTH`,
  CITY: `CITY`,
  FAVORITIES: `FAVORITIES`,
  PROPERTYES: `PROPERTYES`,
  ADD_COMMENT: `ADD_COMMENT`,
  COMMENTS: `COMMENTS`,
  SORT: `SORT`,
  PROPERTY: `PROPERTY`,
  OFFER_ID: `OFFER_ID`
};

export {NameSpace};

export default combineReducers({
  [NameSpace.OFFERS]: loadOffersReducer,
  [NameSpace.AUTH_DATA]: authData,
  [NameSpace.CITY]: city,
  [NameSpace.CHECK_AUTH]: checkAuth,
  [NameSpace.FAVORITIES]: loadFavoritesReducer,
  [NameSpace.PROPERTYES]: propertyes,
  [NameSpace.ADD_COMMENT]: addCommentReducer,
  [NameSpace.COMMENTS]: loadCommentsReducer,
  [NameSpace.SORT]: sorting,
  [NameSpace.OFFER_ID]: offerId,
  [NameSpace.PROPERTY]: loadProperty,
});
