'use client';
import { mapStyle } from '@/configs/google-map';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';

interface MapType {
  lat: number;
  lng: number;
}
interface Props {
  center: MapType;
  currentLocation: MapType;
}

const mapOptions = {
  panControl: false,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  overviewMapControl: false,
  rotateControl: false,
  fullscreenControl: false,
  styles: mapStyle,
};

const MapUI = ({ center, currentLocation }: Props) => {
  // laod script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_APIKEY!,
    libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading....</div>;

  return (
    <GoogleMap
      options={mapOptions}
      zoom={currentLocation ? 14 : 10}
      center={(currentLocation || center) as any}
      mapContainerClassName="map"
      mapContainerStyle={{ width: '100%', height: '100%', margin: 'auto' }}
    >
      <MarkerF position={currentLocation} icon="/img/marker.png" />
    </GoogleMap>
  );
};

export default MapUI;
