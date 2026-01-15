import { createContext, useContext, useState } from "react";

const PlainModeContext = createContext();

export function PlainModeProvider({ children }) {
  const [plainMode, setPlainMode] = useState(false);

  return (
    <PlainModeContext.Provider value={{ plainMode, setPlainMode }}>
      {children}
    </PlainModeContext.Provider>
  );
}

export function usePlainMode() {
  return useContext(PlainModeContext);
}
