import React from 'react'
import ReactMapGL, {Marker,Popup} from "react-map-gl";
// the following import solve Missing Mapbox GL JS CSS problem
import "mapbox-gl/src/css/mapbox-gl.css";
import { useState } from 'react';
import getCenter from 'geolib/es/getCenter';
import { LocationMarkerIcon } from '@heroicons/react/solid';

function Map({searchResults}) {
    const [selectedLocation, setSelectedLocation] = useState({});
  // transform the search results object into
  // {latitude: 52.516272,longitude:13.377722} object

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));


  const center = getCenter(coordinates);


  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });


  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mbargaedge/cksqi34se1p7t18pt8re5o97x"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result, i) => (
        <div key={i}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
                onClick={ () => setSelectedLocation(result)}
                className="cursor-pointer text-2xl text-red-600 animate-bounce"
                >
              <LocationMarkerIcon className="h-5 w-5 lg:h-8 lg:w-8" />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg> */}
            </p>
          </Marker>
            {/* The popup that should show if we click on a Marker */}
          {selectedLocation.long === result.long ? (
              <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={true}
                latitude={result.lat}
                longitude={result.long}
               >
                {result.title}
              </Popup>
          )
          :(false)}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map
