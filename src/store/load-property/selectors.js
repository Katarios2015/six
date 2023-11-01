import {NameSpace} from "../root-reducer";

const getOffer = (state) => state[NameSpace.PROPERTY].offer;
const getOfferDataLoaded = (state) => state[NameSpace.PROPERTY].isOfferDataLoaded;

export {getOffer, getOfferDataLoaded};
