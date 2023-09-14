import React from "react";
import PropTypes from "prop-types";
import {CARD_PROP_TYPES} from "../../const/const";


const ImagesList = (props) => {
  const {propertyItems} = props;
  const {images, type} = propertyItems;
  return (
    images.map((item, index)=> {
      return (
        <div key={index} className="property__image-wrapper">
          <img className="property__image" src={item}
            alt={`Photo ${type}`} />
        </div>
      );
    })

  );

};

ImagesList.propTypes = {
  propertyItems: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired
};

export default ImagesList;
