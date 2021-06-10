import React from 'react'
import GoogleMapReact from 'google-map-react'

const MapSection = () => {
  let center = {
    lat: 57.700946,
    lng: 11.96603,
  }
  let zoom = 15

  return (
    <div style={{ height: '600px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyDylTLvci9BDC3t07ArllM9uc0_N5ordXg'
        }
        defaultCenter={center}
        defaultZoom={zoom}></GoogleMapReact>
    </div>
  )
}

export default MapSection
