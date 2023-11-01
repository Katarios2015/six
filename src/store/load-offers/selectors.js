import {NameSpace} from "../root-reducer";

const getOffers = (state) => state[NameSpace.OFFERS].offers;
const getDataLoaded = (state) => state[NameSpace.OFFERS].isDataLoaded;

export {getOffers, getDataLoaded};
