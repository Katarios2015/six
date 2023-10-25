import {ActionCreator} from "./action";
// import {AuthorizationStatus} from "../const/const";
import {adaptToClient, adaptToClientReview} from "./middlewares/adapter";

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map(adaptToClient))))
);


const fetchOffer = () => (dispatch, getState, api) => (
  api.get(`/hotels/${getState().urlId}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadOffer(adaptToClient(data)));
    })
    .catch(() => dispatch(ActionCreator.redirectToRoute(`/offer/`)))
);

const fetchComments = () => (dispatch, getState, api) => (
  api.get(`/comments/${getState().urlId}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadComments(data.map(adaptToClientReview)));
    })
    .catch(() => console.log(`/comments/${getState().urlId}`))
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

const reviewPost = ({comment: comment, rating}) => (dispatch, getState, api) => (
  api.post(`/comments/${getState().urlId}`, {comment, rating})
    .then(({data}) => {
      dispatch(ActionCreator.addComment(data));
    })
    .catch((error) => console.log(`Ошибка ` + error))
);

export {fetchOffersList, fetchOffer, checkAuth, login, reviewPost, fetchComments};

