import {
  AlertTriangle,
  Flame,
  CloudRain,
  ShieldAlert,
} from "lucide-react";

export const riskVisuals = {
  Low: {
    label: "Low Risk",
    color: "text-green-600 bg-green-50",
    icon: ShieldAlert,
  },
  Medium: {
    label: "Moderate Risk",
    color: "text-yellow-700 bg-yellow-50",
    icon: AlertTriangle,
  },
  High: {
    label: "High Risk",
    color: "text-red-600 bg-red-50",
    icon: Flame,
  },
};
