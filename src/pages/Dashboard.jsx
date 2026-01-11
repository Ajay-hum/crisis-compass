import { useEffect, useState } from "react";
import { crises } from "../data/crises";
import CrisisCard from "../components/crisis/CrisisCard";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [severityFilter, setSeverityFilter] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const filteredCrises = crises.filter((crisis) => {
    const matchesSearch = crisis.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesSeverity =
      severityFilter === "All" || crisis.severity === severityFilter;

    return matchesSearch && matchesSeverity;
  });

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-slate-900">
          Current Crises
        </h1>

        <p className="mt-2 text-slate-600">
          Stay informed about ongoing global and local crises.
        </p>

        {/* Filters */}
        <div className="mt-6 mb-8 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search crises..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
            className="border px-4 py-2 rounded-lg"
          >
            <option>All</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-slate-500 mt-12">
            Loading crisis data...
          </p>
        )}

        {/* Empty state */}
        {!loading && filteredCrises.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-lg font-medium text-slate-700">
              No crises found
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Try adjusting your search or filter
            </p>
          </div>
        )}

        {/* Grid */}
        {!loading && filteredCrises.length > 0 && (
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCrises.map((crisis) => (
              <CrisisCard key={crisis.id} crisis={crisis} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
