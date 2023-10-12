import React from "react";
import PropTypes from 'prop-types';
import {ActionCreator} from "../../store/action";
import {connect} from 'react-redux';
import {CARD_PROP_TYPES} from '../../const/const';

const SortForm = (props) => {
  const {sortType, sortList, sort} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sortList.map((type, index)=> {
          return (
            <li
              onClick={()=> {
                sort(type);
              }}
              tabndex={0}
              key={index}
              className={type === sortType ? `places__option places__option--active` :
                `places__option`}>
              {type}</li>
          );
        })
        }
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  sort(sortType) {
    dispatch(ActionCreator.sort(sortType));
  },
});


SortForm.propTypes = {
  sortList: PropTypes.arrayOf(PropTypes.string).isRequired,
  sortType: PropTypes.string.isRequired,
  sort: PropTypes.func.isRequired,
  propertyes: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SortForm);
