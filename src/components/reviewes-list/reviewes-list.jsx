import React from "react";

import Review from "../review/review";
import PropTypes from 'prop-types';
import {REVIEW_PROP_TYPES} from '../../const/const';

const ReviewesList = (props) => {
  const {reviews} = props;
  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((item)=>{
          return (<Review key={item.id}
            reviewItem={item}
          />);

        })}
      </ul>
    </>

  );
};


ReviewesList.propTypes = {
  reviews: PropTypes.arrayOf(REVIEW_PROP_TYPES).isRequired
};
export default ReviewesList;
