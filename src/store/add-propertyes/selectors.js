//import {createSelector} from "reselect";
import {NameSpace} from "../root-reducer";

const getPropertyes = (state) => state[NameSpace.PROPERTYES].propertyes;

export {getPropertyes};
