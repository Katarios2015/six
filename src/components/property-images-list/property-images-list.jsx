import React from "react";
// import PropTypes from "prop-types";
import {CARD_PROP_TYPES} from "../../const/const";


const ImagesList = (props) => {
  const {propertyItem} = props;
  const {images, type} = propertyItem;
  return (
    images.slice(0, 6).map((item, index)=> {
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
  propertyItem: CARD_PROP_TYPES
};

export default ImagesList;
