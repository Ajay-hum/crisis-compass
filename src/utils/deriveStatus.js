export function deriveStatus(crisis) {
  if (!crisis.timeline || crisis.timeline.length === 0) {
    return crisis.status || "Stable";
  }

  const lastEvent = crisis.timeline[crisis.timeline.length - 1];

  // Priority logic
  if (crisis.trend === "up") return "Escalating";
  if (crisis.trend === "down") return "Improving";

  return lastEvent.status || "Stable";
}
