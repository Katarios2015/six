import {NameSpace} from "../root-reducer";

const getCityName = (state) => state[NameSpace.CITY].cityName;


export {getCityName};
