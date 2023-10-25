import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {reviewPost} from "../../store/action-api";

const MAX_RATING = 5;
const stars = new Array(MAX_RATING).fill();

const ReviewForm = ({onSubmit}) => {
  const [countStars, setCountStars] = useState(0);
  const [review, setReview] = useState(``);

  const handleReviewChange = (evt)=> {
    setReview(evt.target.value);
    if (review === `` && countStars) {
      submitBtn.disabled = true;
    } else if (review && countStars) {
      submitBtn.disabled = false;
    }

  };
  const handleStarsChange = (evt)=> {
    setCountStars(evt.target.value);
  };

  const submitBtn = document.querySelector(`.reviews__submit`);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({
      comment: review,
      rating: countStars
    },
    setCountStars(null),
    setReview(``),
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map((star, i) => {
          const value = `${stars.length - i}`;
          const id = `${value}-stars`;
          return (
            <React.Fragment key={i}>
              <input className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={value}
                id={id}
                type="radio"
                checked = {value === countStars}
                onChange={handleStarsChange}/>
              <label htmlFor={id} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </React.Fragment>
          );
        })
        }
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value = {review}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleReviewChange}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(commentData) {
    // console.log(commentData);
    dispatch(reviewPost(commentData));
  },
});

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
