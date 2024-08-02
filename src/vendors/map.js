import React, { useRef, useState, useCallback, useEffect } from 'react';
import { GoogleMap, LoadScriptNext, Marker, StandaloneSearchBox } from '@react-google-maps/api';

const libraries=['places']

const MyComponent = (props) => {
    const [map, setMap] = useState(null);
    const [center, setCenter] = useState({ lat: 16.3337217, lng: 77.2941666 });
    const [markerPosition, setMarkerPosition] = useState(null);
    const [searchBox, setSearchBox] = useState(null);
    const [zoom,setZoom] = useState(15)
    const searchBoxRef = useRef(null);
    // console.log('loading Map')
    useEffect(()=>{
setTimeout(()=>{
setZoom(5)
},2000)
    },[])
  
    const onLoad = useCallback((mapInstance) => {
      setMap(mapInstance);
    }, []);
  
    const onSearchBoxLoad = useCallback((ref) => {
      // console.log(ref)
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
     
      const cent = {
        lat:lat,
        lng:lng,
      }
      props.mapLocation(cent)
    };

    const handleClick = (e) => {
        //// console.log()(this.state.ms)
        const lat= e.latLng.lat()
        const lng = e.latLng.lng()
  
        setCenter({ lat, lng });
        setMarkerPosition({ lat, lng });
        map.panTo({ lat, lng });
       
            const cent = {
              lat:lat,
              lng:lng,
            }
            props.mapLocation(cent)
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
            left: "50%",
            paddingLeft:20,
            marginLeft: "-120px",
            top: "3%",
            zIndex:10000
          }}
        />
      </StandaloneSearchBox>
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%",borderRadius:20 ,marginTop:30}}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onClick={handleClick}
      >
        {/* You can add markers or other components here */}
        {markerPosition && <Marker position={markerPosition} />}
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default MyComponent;
