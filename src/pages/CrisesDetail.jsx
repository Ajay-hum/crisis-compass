import { Link, useParams } from "react-router-dom"
import { crises } from "../data/crises";
import { getSeverityStyles } from "../utils/severityUtils";

export default function CrisisDetail() {
    const { id } = useParams();

    const crisis = crises.find((item) => item.id === id)

    if (!crisis) {
        return (
            <main className="min-h-screen px-6 py-12">
                <h1 className="text-2xl font-bold text-red-600">
                    Crisis not found
                </h1>
                <Link to="/dashboard" className="text-blue-600 underline">
                    Back to Dashboard
                </Link>
            </main>
        )
    }

    const severityClasses = getSeverityStyles(crisis.severity);

    return (
        <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl border">
        <h1 className="text-3xl font-bold text-slate-900">
          {crisis.title}
        </h1>

        <p className="mt-4 text-slate-600">
          {crisis.description}
        </p>

        <p className={`mt-4 font-medium ${severityClasses.text}`}>
          Severity: {crisis.severity}
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">
            What to do now
          </h2>
          <ul className="mt-3 list-disc list-inside text-slate-600">
            {crisis.whatToDoNow.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>

        <Link
          to="/dashboard"
          className="inline-block mt-8 text-blue-600 underline"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </main>
    )
}