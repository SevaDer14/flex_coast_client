import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const MapSection = () => {
  let center = {
    lat: 57.700946,
    lng: 11.96603,
  }
  const containerStyle = {
    width: '100%',
    height: '600px',
  }
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  })
  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}></GoogleMap>
    )
  )
}

export default MapSection
