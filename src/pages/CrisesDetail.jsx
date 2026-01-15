import { Link, useParams } from "react-router-dom";
import { crises } from "../data/crises";
import InfoSection from "../components/crisis/InfoSection";
import SeverityBadge from "../components/crisis/SeverityBadge";
import Timeline from "../components/crisis/Timeline";
import { useState } from "react";
import SourcesSection from "../components/crisis/SourcesSection";
import { useLocation } from "../context/LocationContext";
import TrendIndicator from "../components/crisis/TrendIndicator";
import { deriveStatus } from "../utils/deriveStatus";
import { usePlainMode } from "../context/PlainModeContext";
import PlainModeToggle from "../components/PlainModeToggle";
import { sectionIcons } from "../utils/sectionIcons";
import { statusStyles } from "../utils/statusStyles";



export default function CrisisDetail() {
  const { id } = useParams();
  const crisis = crises.find((c) => c.id === id);
  
  const { location, setLocation } = useLocation();

  const derivedStatus = deriveStatus(crisis);

  const { plainMode } = usePlainMode();


  if (!crisis) {
    return (
      <p className="text-center mt-12 text-slate-600">
        Crisis not found
      </p>
    );
  }

  const summaryText = plainMode && crisis.plainSummary
    ? crisis.plainSummary
    : crisis.summary;

  const guidance =
  crisis.guidance?.[location] || crisis.guidance?.global;

  const whatToDoItems =
  plainMode && guidance?.whatToDoNow?.plain
    ? guidance.whatToDoNow.plain
    : guidance?.whatToDoNow?.detailed || guidance?.whatToDoNow;



  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900">
          {crisis.title}
        </h1>

        <div className="mt-2">
          <PlainModeToggle />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <SeverityBadge severity={crisis.severity} />
          <TrendIndicator trend={crisis.trend} />

          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[derivedStatus]}`}
          >
            Status: {derivedStatus}
          </span>

          <span className="text-sm text-slate-500">
            Last updated: {crisis.lastUpdated}
          </span>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setLocation("global")}
            className={`px-4 py-2 rounded-lg border transition
              focus:outline-none focus:ring-2 focus:ring-blue-600
              ${location === "global"
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-700"}
            `}
          >
            Global
          </button>

          <button
            onClick={() => setLocation("Nigeria")}
            className={`px-4 py-2 rounded-lg border transition
              focus:outline-none focus:ring-2 focus:ring-blue-600
              ${location === "Nigeria"
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-700"}
            `}
          >
            Nigeria
          </button>
        </div>

        <p className="mt-4 text-slate-700">
          {summaryText}
        </p>

        <InfoSection
          title="Who is affected"
          items={guidance?.affectedGroups}
          icon={sectionIcons.affected}
        />

        <InfoSection
          title="What to do now"
          items={whatToDoItems}
          icon={sectionIcons.now}
        />

        <InfoSection
          title="Prepare next"
          items={guidance?.prepareNext}
          icon={sectionIcons.prepare}
        />

        <InfoSection
          title="What to avoid"
          items={guidance?.avoid}
          icon={sectionIcons.avoid}
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
