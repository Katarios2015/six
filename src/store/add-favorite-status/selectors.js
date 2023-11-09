import {NameSpace} from "../root-reducer";

const getFavoriteStatus = (state) => state[NameSpace.STATUS].status;

export {getFavoriteStatus};
