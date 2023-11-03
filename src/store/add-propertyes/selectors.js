import {createSelector} from "reselect";
// import {NameSpace} from "../root-reducer";

import {getCityName} from "../city/selectors";
import {getSortType} from "../sort/selectors";
import {getOffers} from "../load-offers/selectors";
import {getFiltredByCityOffers} from "../../utils/filter";

const getPropertyes = createSelector(
    [getCityName, getSortType, getOffers],
    getFiltredByCityOffers(getCityName, getOffers, getSortType)
);


export {getPropertyes};
