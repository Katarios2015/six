import {NameSpace} from "../root-reducer";

const getComment = (state) => state[NameSpace.ADD_COMMENT].comment;
const getName = (state) => state[NameSpace.ADD_COMMENT].name;
const getAvatarUrl = (state) => state[NameSpace.ADD_COMMENT].avatarUrl;
const getIsPro = (state) => state[NameSpace.ADD_COMMENT].isPro;

export {getComment, getName, getAvatarUrl, getIsPro};
