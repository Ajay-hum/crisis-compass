import {
  AlertTriangle,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export const riskVisuals = {
  Low: {
  label: "Low Risk",
  icon: CheckCircle,
  color: "border-green-400",
  },
  Medium: {
    label: "Moderate Risk",
    icon: AlertCircle,
    color: "border-yellow-400",
  },
  High: {
    label: "High Risk",
    icon: AlertTriangle,
    color: "border-red-400",
  },

};
