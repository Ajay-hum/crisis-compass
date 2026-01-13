import { useLocation } from "../context/LocationContext";

export default function LocationSelector() {
  const { location, setLocation } = useLocation();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLocation("global")}
        className={`px-3 py-1 rounded-md border text-sm ${
          location === "global"
            ? "bg-blue-600 text-white"
            : "bg-white text-slate-700"
        }`}
      >
        Global
      </button>

      <button
        onClick={() => setLocation("Nigeria")}
        className={`px-3 py-1 rounded-md border text-sm ${
          location === "Nigeria"
            ? "bg-blue-600 text-white"
            : "bg-white text-slate-700"
        }`}
      >
        Nigeria
      </button>
    </div>
  );
}
