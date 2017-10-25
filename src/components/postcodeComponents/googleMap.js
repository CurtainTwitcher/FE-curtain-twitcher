import React from "react";
import MdInfoOutline from "react-icons/lib/md/info-outline";
import { compose, withProps, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker
} from "react-google-maps";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

const MyMapComponent = compose(
  withStateHandlers(
    () => ({
      isOpen: false
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen
      })
    }
  ),
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `40%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <div className="box">
      <GoogleMap
        defaultZoom={9}
        defaultCenter={{ lat: +props.latitude, lng: +props.longitude }}
        center={{ lat: +props.latitude, lng: +props.longitude }}
      >
        <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
          {/* MAP on each marker to generate a few */}
          <Marker
            position={{ lat: +props.latitude, lng: +props.longitude }}
            onClick={props.onToggleOpen}
          >
            {props.isOpen && (
              <InfoWindow onCloseClick={props.onToggleOpen}>
                <div>
                  <MdInfoOutline /> Hello
                </div>
              </InfoWindow>
            )}
          </Marker>
          {/* <Marker
        key={1}
        position={{ lat: 53.4807593, lng: -2.2426301000000184 }}
        onClick={props.onToggleOpen}
      />
      <Marker
        key={1}
        position={{ lat: 53.4007593, lng: -2.2926305000000184 }}
        onClick={props.onToggleOpen}
      /> */}
        </MarkerClusterer>
      </GoogleMap>
    </div>
  );
});

export default MyMapComponent;
