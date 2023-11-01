import {NameSpace} from "../root-reducer";

const getEmail = (state) => state[NameSpace.AUTH_DATA].email;
const getAvatarUrl = (state) => state[NameSpace.AUTH_DATA].avatarUrl;
const getIsPro = (state) => state[NameSpace.AUTH_DATA].isPro;

export {getEmail, getAvatarUrl, getIsPro};
