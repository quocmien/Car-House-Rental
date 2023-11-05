'use client';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

interface MapType {
  lat: string;
  lng: string;
}
interface Props {
  center: MapType;
  currentLocation: MapType;
}

const MapUI = ({ center, currentLocation }: Props) => {

  // laod script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_APIKEY!,
    libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading....</div>;

  // on map load
  const onMapLoad = (map: any) => {
    const controlDiv = document.createElement('div');
    const controlUI = document.createElement('div');
    controlUI.innerHTML = 'Get Location';
    controlUI.style.backgroundColor = 'white';
    controlUI.style.color = 'black';
    controlUI.style.border = '2px solid #ccc';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.style.width = '100%';
    controlUI.style.padding = '8px 0';
    controlDiv.appendChild(controlUI);

    map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
      controlDiv
    );
  };

  return (
    <GoogleMap
      zoom={currentLocation ? 18 : 12}
      center={(currentLocation || center) as any}
      mapContainerClassName="map"
      mapContainerStyle={{ width: '100%', height: '100%', margin: 'auto' }}
      onLoad={onMapLoad}
    >
      {currentLocation && <Marker position={currentLocation as any} />}
    </GoogleMap>
  );
};

export default MapUI;
