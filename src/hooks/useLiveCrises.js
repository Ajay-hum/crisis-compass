import { useEffect, useState } from "react";
import { crises as initialCrises } from "../data/crises";

export function useLiveCrises() {
  const [data, setData] = useState(initialCrises);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((crisis) => ({
          ...crisis,
          lastUpdated:
            Math.random() > 0.7 ? Date.now() : crisis.lastUpdated,
        }))
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return data;
}
