import { Link, useParams } from "react-router-dom";
import { crises } from "../data/crises";
import InfoSection from "../components/crisis/InfoSection";
import SeverityBadge from "../components/crisis/SeverityBadge";
import Timeline from "../components/crisis/Timeline";
import { useState } from "react";
import SourcesSection from "../components/crisis/SourcesSection";


export default function CrisisDetail() {
  const { id } = useParams();
  const crisis = crises.find((c) => c.id === id);

  const [context, setContext] = useState("global")

  if (!crisis) {
    return (
      <p className="text-center mt-12 text-slate-600">
        Crisis not found
      </p>
    );
  }

  const guidance =
  context === "global"
    ? crisis.guidance?.global
    : crisis.guidance?.[context];


  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
        <article className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-900">
            {crisis.title}
            </h1>

            <div className="mt-4 flex items-center gap-4">
                <SeverityBadge severity={crisis.severity} />
                <span className="text-sm text-slate-500">
                    Last updated: {crisis.lastUpdated}
                </span>
            </div>

            <div className="mt-6 flex gap-3">
                <button
                    onClick={() => setContext("global")}
                    className={`px-4 py-2 rounded-lg border
                    ${context === "global"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-slate-700"}
                    `}
                >
                    Global
                </button>

                <button
                    onClick={() => setContext("Nigeria")}
                    className={`px-4 py-2 rounded-lg border
                    ${context === "Nigeria"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-slate-700"}
                    `}
                >
                    Nigeria
                </button>
            </div>



            <p className="mt-4 text-slate-700">
            {crisis.summary}
            </p>

            <InfoSection
            title="Who is affected"
            items={guidance?.affectedGroups}
            />

            <InfoSection
            title="What to do now"
            items={guidance?.whatToDoNow}
            />

            <InfoSection
            title="Prepare next"
            items={guidance?.prepareNext}
            />

            <InfoSection
            title="What to avoid"
            items={guidance?.avoid}
            />

            <Timeline events={crisis.timeline} />

            <SourcesSection sources={crisis.sources} />

            <Link 
            to="/dashboard" 
            className="inline-block mt-10 text-blue-600 underline"
            >
            ← Back to Dashboard
            </Link>
        </article>
    </main>
  );
}
