import {ActionCreator} from "./action";
// import {AuthorizationStatus} from "../const/const";
import {adaptToClient} from "./middlewares/adapter";

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map(adaptToClient))))
);

const fetchOffer = () => (dispatch, getState, api) => (
  api.get(`/hotels/3`)
    .then(({data}) => {
      dispatch(ActionCreator.loadOffer(adaptToClient(data)));
      console.log(getState());
    })
    .catch(() => dispatch(ActionCreator.redirectToRoute(`/offer/`)))
);
//${getState().id}

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

export {fetchOffersList, fetchOffer, checkAuth, login};

