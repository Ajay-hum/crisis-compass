import { Link } from "react-router-dom";
import { getSeverityStyles } from "../../utils/severityUtils";

export default function CrisisCard({ crisis }) {
  const severityClasses = getSeverityStyles(crisis.severity);

  return (
    <Link to={`/crises/${crisis.id}`}>
      <article
        className={`rounded-xl border p-6 bg-white ${severityClasses.border}`}
      >
        <h3 className="text-xl font-semibold text-slate-900">
          {crisis.title}
        </h3>

        <p className="mt-3 text-slate-600">
          {crisis.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span
            className={`text-sm font-medium ${severityClasses.text}`}
          >
            Severity: {crisis.severity}
          </span>

          <span className="text-xs text-slate-400">
            {crisis.lastUpdated}
          </span>
        </div>
      </article>
    </Link>
  );
}
