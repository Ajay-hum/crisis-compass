import { usePlainMode } from "../context/PlainModeContext";

export default function PlainModeToggle() {
  const { plainMode, setPlainMode } = usePlainMode();

  return (
    <button
      onClick={() => setPlainMode(!plainMode)}
      className="text-sm underline text-blue-600"
    >
      {plainMode ? "Switch to detailed view" : "Switch to simple view"}
    </button>
  );
}
