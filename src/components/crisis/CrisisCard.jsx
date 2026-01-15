import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";
import { riskVisuals } from "../../utils/riskVisuals";
import { statusStyles } from "../../utils/statusStyles";
import TrendIndicator from "./TrendIndicator";
import { deriveStatus } from "../../utils/deriveStatus";


export default function CrisisCard({ crisis }) {
  const visual = riskVisuals[crisis.severity];
  const Icon = visual.icon;

  const derivedStatus = deriveStatus(crisis);


  return (
    <Link to={`/crises/${crisis.id}`}
      className={`rounded-xl border p-5 transition hover:shadow-lg ${visual.color}`}
    >
      {/* 🔴 Visual Risk Header */}
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6" />
        <span className="text-sm font-semibold">
          {visual.label}
        </span>
      </div>

      {/* 🧠 Crisis Title */}
      <h3 className="mt-3 text-lg font-bold text-slate-900">
        {crisis.title}
      </h3>
      <TrendIndicator trend={crisis.trend} />

      {/* 📝 Short Summary */}
      <p className="mt-2 text-sm text-slate-700">
        {crisis.description}
      </p>

      {/* 📊 Status + Time */}
      <div className="mt-4 flex items-center justify-between">
        <p
          className={`text-xs font-medium ${statusStyles[derivedStatus]}`}
        >
          Status: {derivedStatus}
        </p>

        <span className="text-xs text-slate-500">
          Updated {timeAgo(crisis.lastUpdated)}
        </span>
      </div>
    </Link>
  );
}


// import { Link } from "react-router-dom";
// import { timeAgo } from "../../utils/timeAgo";
// import { riskVisuals } from "../../utils/riskVisuals";
// import { statusStyles } from "../../utils/statusStyles";


// export default function CrisisCard({ crisis }) {
//   const severityClasses = getSeverityStyles(crisis.severity);

//   const visual = riskVisuals[crisis.severity];
//   const Icon = visual.icon;


//   return (
//     <Link to={`/crises/${crisis.id}`}>
//       <article
//         className={`rounded-xl border p-6 bg-white transition hover:shadow-lg ${severityClasses.border}`}
//       >
//         <h3 className="text-xl font-semibold text-slate-900">
//           {crisis.title}
//         </h3>

//         <p className="mt-3 text-slate-600">
//           {crisis.description}
//         </p>

//         <div className="mt-4 flex items-center justify-between">
//           <RiskIndicator severity={crisis.severity} />

//           <span className="text-xs text-slate-500">
//             Updated {timeAgo(crisis.lastUpdated)}
//           </span>
//         </div>
//       </article>
//     </Link>
//   );
// }

