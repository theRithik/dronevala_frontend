import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius:"30px",
  marginTop:"40px"
};

const center = {
  lat:16.3337217,
  lng:77.2941666
};

const ServiceMap= (props)=> {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDuwFf2SPxY19094jHuEnU8x5vEdNBjcCg"
  })
const [postions,setPostion]=useState(null)
  const [map, setMap] = React.useState(null)
const [zoom,setZoom]=useState(4)
useEffect(()=>{
setTimeout(()=>{
setZoom(6)
},2000)
},[])
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
   

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

 const handleClick = (e) => {
    //console.log()(this.state.ms)
   const pos = {
    lat:e.latLng.lat(),
    lng:e.latLng.lng()
   }
   setPostion(pos)
props.mapLocation(pos)
  };


  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={handleClick}
      >
        <Marker position={postions}/>
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(ServiceMap)