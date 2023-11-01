import {NameSpace} from "../root-reducer";

const getFavoriteOffers = (state) => state[NameSpace.FAVORITIES].favoriteOffers;
const getFavoriteDataLoaded = (state) => state[NameSpace.FAVORITIES].isFavoriteDataLoaded;

export {getFavoriteOffers, getFavoriteDataLoaded};
