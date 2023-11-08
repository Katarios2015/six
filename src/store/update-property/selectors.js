import {NameSpace} from "../root-reducer";

const getIsFavoriteStatus = (state) => state[NameSpace.UPDATED_OFFER].isFavorite;
const getItem = (state) => state[NameSpace.UPDATED_OFFER].item;

export {getIsFavoriteStatus, getItem};
