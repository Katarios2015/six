import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import "leaflet/dist/leaflet.css";
import {CARD_PROP_TYPES} from "../../const/const";
import {connect} from 'react-redux';

const Map = (props) => {
  const {mapOffers} = props;
  const mapRef = useRef(null);
  const city = [48.856657, 2.351543];
  const zoom = 12;
  console.log(mapOffers);
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

    mapOffers.forEach((offer) => {
      const customIcon = leaflet.icon({
        iconUrl: `/img/pin.svg`,
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

      return () => {
        mapRef.current.remove();
      };
    });
  }, []);
  return (
    <div style={{height: `100%`}} id="map" ref={mapRef}/>
  );
};

const mapStateToProps = (state) => ({
  mapOffers: state.propertyes,
});

Map.propTypes = {
  mapOffers: PropTypes.arrayOf(CARD_PROP_TYPES).isRequired,
};
export {Map};
export default connect(mapStateToProps, null)(Map);
