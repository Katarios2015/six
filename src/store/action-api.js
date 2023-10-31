import {loadOffers, loadFavoriteOffers, loadOffer, redirectToRoute, loadComments, requireAuthorization, authData, addComment} from "./action";
import {API_ROUTE, APP_ROUTE} from "../const/const";
import {adaptToClient, adaptToClientReview} from "../utils/adapter";


const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(API_ROUTE.HOTELS)
    .then(({data}) => dispatch(loadOffers(data.map(adaptToClient))))
);

const fetchFavoritesList = () => (dispatch, _getState, api) => (
  api.get(API_ROUTE.FAVORITE)
    .then(({data}) => dispatch(loadFavoriteOffers(data.map(adaptToClient))))
);


const fetchOffer = () => (dispatch, getState, api) => (
  api.get(`${API_ROUTE.HOTELS}/${getState().urlId}`)
    .then(({data}) => {
      dispatch(loadOffer(adaptToClient(data)));
    })
    .catch(() => dispatch(redirectToRoute(`/offer/`)))
);

const fetchComments = () => (dispatch, getState, api) => (
  api.get(`${API_ROUTE.COMMENTS}/${getState().urlId}`)
    .then(({data}) => {
      dispatch(loadComments(data.map(adaptToClientReview)));
    })
    .catch(() => {})
);


const checkAuth = () => (dispatch, _getState, api) => (
  api.get(API_ROUTE.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(true));
      dispatch(authData({
        ...data,
        avatarUrl: data[`avatar_url`],
        isPro: data[`is_pro`],
      }));
    })
    .catch(() => {})
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APP_ROUTE.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(requireAuthorization(true));
      dispatch(authData({
        ...data,
        avatarUrl: data[`avatar_url`],
        isPro: data[`is_pro`],
      }));
    })
    .then(() => dispatch(redirectToRoute(APP_ROUTE.MAIN)))
);

const reviewPost = ({comment: comment, rating}) => (dispatch, getState, api) => (
  api.post(`${APP_ROUTE.COMMENTS}/${getState().urlId}`, {comment, rating})
    .then(({data}) => {
      dispatch(addComment(data));
    })
    .catch((error) => error)
);

export {fetchOffersList, fetchOffer, checkAuth, login, reviewPost, fetchComments, fetchFavoritesList};

