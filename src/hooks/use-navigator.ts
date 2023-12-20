"use client"

import { useEffect, useState } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          setError(error);
        }
      );
    } else {
      setError(new Error('Geolocation is not supported in this environment.'));
    }
  }, []); // Runs once on component mount

  return { location, error };
};

export {
  useGeolocation
};
