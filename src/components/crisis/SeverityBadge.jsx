import { getSeverityStyles } from "../../utils/severityUtils";

export default function SeverityBadge({ severity }) {
  const styles = getSeverityStyles(severity);

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium
        bg-opacity-10 ${styles.text} ${styles.border}`}
    >
      {severity} Risk
    </span>
  );
}
