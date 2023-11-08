import {loadOffers, loadFavoriteOffers, loadOffer, redirectToRoute, loadComments, requireAuthorization, authData, addComment, updatedOffer} from "./action";
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
  api.get(`${API_ROUTE.HOTELS}/${getState().OFFER_ID.urlId}`)
    .then(({data}) => {
      dispatch(loadOffer(adaptToClient(data)));
    })
    .catch(() => {
      dispatch(redirectToRoute(`/offer/`));
    }
    )
);

const fetchComments = () => (dispatch, getState, api) => (
  api.get(`${API_ROUTE.COMMENTS}/${getState().OFFER_ID.urlId}`)
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
  api.post(`${APP_ROUTE.COMMENTS}/${getState().OFFER_ID.urlId}`, {comment, rating})
    .then(({data}) => {
      dispatch(addComment({
        ...data,
        comment: data[`comment`],
        name: data[`name`],
        avatarUrl: data[`avatar_url`],
        isPro: data[`is_pro`],
      }));
    })
    .catch((error) => console.log(`Ошибка ` + error))
);

const addFavorite = (urlId) => (dispatch, getState, api) => {
  const item = getState().PROPERTY;
  const status = item.isFavorite ? 0 : 1;
  return api.post(`favorite/${getState().OFFER_ID.urlId}/${status}`, {urlId})
    .then(({data}) => {
      dispatch(updatedOffer({
        ...data,
        isFavorite: data[`is_favorite`]
      }));
    })
    .catch((error) => console.log(`Ошибка ` + error));
};

const addFavoriteOnMain = (id) => (dispatch, getState, api) => {
  const items = getState().OFFERS.offers;
  const item = items.find((offer)=> {
    return offer.id === id;
  });
  const status = item.isFavorite ? 0 : 1;
  return api.post(`favorite/${id}/${status}`, {id})
    .then(({data}) => {
      dispatch(updatedOffer({
        ...data,
        isFavorite: data[`is_favorite`]
      }));
    })
    .catch((error) => console.log(`Ошибка ` + error));
};
export {fetchOffersList, fetchOffer, checkAuth, login, reviewPost, fetchComments, fetchFavoritesList, addFavorite, addFavoriteOnMain};

