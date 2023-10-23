import {ActionCreator} from "./action";
// import {AuthorizationStatus} from "../const/const";

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(true));
      dispatch(ActionCreator.authData({
        ...data,
        avatarUrl: data[`avatar_url`],
        isPro: data[`is_pro`],
      }));
    })
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(true));
      dispatch(ActionCreator.authData({
        ...data,
        avatarUrl: data[`avatar_url`],
        isPro: data[`is_pro`],
      }));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export {fetchOffersList, checkAuth, login};

