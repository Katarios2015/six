import {NameSpace} from "../root-reducer";

const getAuthStatus = (state) => state[NameSpace.CHECK_AUTH].authorizationStatus;


export {getAuthStatus};
