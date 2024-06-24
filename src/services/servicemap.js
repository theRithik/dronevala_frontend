import React, { useRef, useState, useCallback } from 'react';
import { GoogleMap, LoadScriptNext, Marker, StandaloneSearchBox } from '@react-google-maps/api';

const libraries=['places']

const MapComponent = (props) => {
    const [map, setMap] = useState(null);
    const [center, setCenter] = useState({ lat: 16.3337217, lng: 77.2941666 });
    const [markerPosition, setMarkerPosition] = useState(null);
    const [searchBox, setSearchBox] = useState(null);
    const searchBoxRef = useRef(null);
    console.log('loading Map')
  
    const onLoad = useCallback((mapInstance) => {
      setMap(mapInstance);
    }, []);
  
    const onSearchBoxLoad = useCallback((ref) => {
      setSearchBox(ref);
    }, []);
  
    const onPlacesChanged = () => {
      const places = searchBox?.getPlaces();
      if (places.length === 0) return;
  
      const place = places[0];
      const location = place.geometry.location;
      const lat = location.lat();
      const lng = location.lng();
  
      setCenter({ lat, lng });
      setMarkerPosition({ lat, lng });
      map.panTo({ lat, lng });
     
      const service = new window.google.maps.DistanceMatrixService();
  const origin1 = { lat:Number(props.ms), lng: Number(props.ms2), };
  const destinationA={lat:Number(lat),lng:Number(lng)}

   const request = {
  origins: [origin1],
  destinations: [destinationA],
  travelMode:'DRIVING',
  avoidHighways: false,
  avoidTolls: false,
  
};

service.getDistanceMatrix(request).then((response) => {
  //console.log()(response.rows[0].elements[0].distance.text,'first')
  const dt = response.rows[0].elements[0].distance.text
  //console.log()(dt.split('k')[0])
      const cent = {
        lat:lat,
        lng:lng,
        dist:dt.split('k')[0]
      }
      props.latlng(cent)
    })
    .catch((err)=>{
      //console.log()(err)
    })
    };

    const handleClick = (e) => {
        //console.log()(this.state.ms)
        const lat= e.latLng.lat()
        const lng = e.latLng.lng()
  
        setCenter({ lat, lng });
        setMarkerPosition({ lat, lng });
        map.panTo({ lat, lng });
        const service = new window.google.maps.DistanceMatrixService();
        const origin1 = { lat:Number(props.ms), lng: Number(props.ms2), };
        const destinationA={lat:Number(lat),lng:Number(lng)}
      
         const request = {
        origins: [origin1],
        destinations: [destinationA],
        travelMode:'DRIVING',
        avoidHighways: false,
        avoidTolls: false,
        
      };
      
      service.getDistanceMatrix(request).then((response) => {
        //console.log()(response.rows[0].elements[0].distance.text,'first')
        const dt = response.rows[0].elements[0].distance.text
        //console.log()(dt.split('k')[0])
            const cent = {
              lat:lat,
              lng:lng,
              dist:dt.split('k')[0]
            }
            props.latlng(cent)
          })
          .catch((err)=>{
            console.log(err)
          })
      };


  return (
    <LoadScriptNext googleMapsApiKey="AIzaSyDuwFf2SPxY19094jHuEnU8x5vEdNBjcCg" libraries={libraries}  loadingElement={<div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>}
    options={{
        defer: true,
        async: true,
    }}>
      <StandaloneSearchBox
        onLoad={onSearchBoxLoad}
        onPlacesChanged={onPlacesChanged}
      >
        <input
          type="text"
          placeholder="Search for places"
          ref={searchBoxRef}
          style={{
            boxSizing: `border-box`,
            border: `1px solid orange`,
            width: `fit-content`,
            height: `40px`,
            padding: `0 12px`,
            borderRadius: `20px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            position: "absolute",
            left: "40%",
            paddingLeft:20,
            marginLeft: "-120px",
            top: "3%",
            zIndex:3
          }}
        />
      </StandaloneSearchBox>
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%",borderRadius:20 }}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onClick={handleClick}
      >
        {/* You can add markers or other components here */}
        {markerPosition && <Marker position={markerPosition} />}
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default MapComponent;
