import {NameSpace} from "../root-reducer";

const getComments = (state) => state[NameSpace.COMMENTS].comments;
const getCommentsLoaded = (state) => state[NameSpace.COMMENTS].isCommentsLoaded;

export {getComments, getCommentsLoaded};
