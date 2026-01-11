export function getSeverityStyles(severity) {
  switch (severity) {
    case "High":
      return {
        border: "border-red-300",
        text: "text-red-600"
      };
    case "Medium":
      return {
        border: "border-yellow-300",
        text: "text-yellow-600"
      };
    case "Low":
      return {
        border: "border-green-300",
        text: "text-green-600"
      };
    default:
      return {
        border: "border-slate-200",
        text: "text-slate-600"
      };
  }
}
