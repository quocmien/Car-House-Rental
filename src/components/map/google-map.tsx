'use client';
import { mapStyle } from '@/configs/google-map';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';

interface MapType {
  lat: number;
  lng: number;
  title?: String | 'StayDriveFinder';
}
interface Props {
  center: MapType;
  currentLocation: MapType;
  address?: string | '';
  title?: string | 'StayDriveFinder';
}

const mapOptions = {
  disableDefaultUI: true,
  scrollwheel: true,
  styles: mapStyle,
};

const MapUI = ({ center, currentLocation, address, title }: Props) => {
  // laod script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
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
      <MarkerF position={currentLocation} label={title}  icon="/icons/symbol/house_small.png" />
    </GoogleMap>
  );
};

export default MapUI;
