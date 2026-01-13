import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";
import { getSeverityStyles } from "../../utils/severityUtils";
import RiskIndicator from "./RiskIndicator";

export default function CrisisCard({ crisis }) {
  const severityClasses = getSeverityStyles(crisis.severity);

  return (
    <Link to={`/crises/${crisis.id}`}>
      <article
        className={`rounded-xl border p-6 bg-white transition hover:shadow-lg ${severityClasses.border}`}
      >
        <h3 className="text-xl font-semibold text-slate-900">
          {crisis.title}
        </h3>

        <p className="mt-3 text-slate-600">
          {crisis.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <RiskIndicator severity={crisis.severity} />

          <span className="text-xs text-slate-500">
            Updated {timeAgo(crisis.lastUpdated)}
          </span>
        </div>
      </article>
    </Link>
  );
}

