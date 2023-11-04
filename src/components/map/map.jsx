import React, {useEffect, useRef, memo} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import "leaflet/dist/leaflet.css";
import {CARD_PROP_TYPES} from "../../const/const";
import {connect} from 'react-redux';
import {getPropertyes} from "../../store/add-propertyes/selectors";

let location;
const getLocation = (array, city) => {
  if (array) {
    let firstChild = array[0];
    if (firstChild) {
      location = firstChild.city.location;
    } else {
      const cityLocations = {
        'Amsterdam': [52.373057, 4.892557],
        'Paris': [48.856663, 2.351556],
        'Cologne': [45.577718, 9.938251],
        'Brussels': [50.846697, 4.352544],
        'Hamburg': [53.550688, 9.992895],
        'Dusseldorf': [51.230569, 6.787428],
      };
      return cityLocations[city];
    }
  }
  return [location.latitude, location.longitude];
};


const Map = (props) => {
  const {mapOffers, activeCard, cityName} = props;
  const mapRef = useRef(null);
  const city = getLocation(mapOffers, cityName);
  const zoom = 12;

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city[0],
        lng: city[1]
      },
      zoom,
      zoomControl: false,
      marker: true
    });

    mapRef.current.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `© OpenStreetMap contributors © CARTO>`
      })
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, [mapRef, mapOffers, cityName]);

  useEffect(() => {
    mapOffers.forEach((offer) => {
      const activePin = activeCard ? activeCard.id === offer.id : false;
      const customIcon = leaflet.icon({
        iconUrl: activePin ? `/img/pin-active.svg` : `/img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current);
    });
  }, [mapRef, mapOffers, activeCard, cityName]);
  return (
    <div style={{height: `100%`}} id="map" ref={mapRef}/>
  );
};

const mapStateToProps = (state) => ({
  mapOffers: getPropertyes(state),
});

Map.propTypes = {
  mapOffers: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired,
  cityName: PropTypes.string,
  activeCard: CARD_PROP_TYPES
};
export {Map};
export default connect(mapStateToProps, null)(Map);
