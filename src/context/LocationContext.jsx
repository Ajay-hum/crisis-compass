import { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [location, setLocation] = useState(() => {
    return localStorage.getItem("userLocation") || "global";
  });

  useEffect(() => {
    localStorage.setItem("userLocation", location);
  }, [location]);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}
