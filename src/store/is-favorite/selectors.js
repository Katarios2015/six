import {NameSpace} from "../root-reducer";

const getIsFavorite = (state) => state[NameSpace.IS_FAVORITE].isFavorite;

export {getIsFavorite};
