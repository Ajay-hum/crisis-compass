import { statusStyles } from "../../utils/statusStyles";

export default function Timeline({ events }) {
  if (!events || events.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-slate-900">
        Situation Timeline
      </h2>

      <ol className="mt-6 border-l border-slate-300 pl-6 space-y-6">
        {events.map((event, index) => (
          <li key={index} className="relative">
            {/* Dot */}
            <span
              className={`absolute -left-3 top-1 w-3 h-3 rounded-full bg-white border-2 ${statusStyles[event.status]}`}
            />

            <time className="text-xs text-slate-500">
              {event.time}
            </time>

            <p className="mt-1 text-sm font-medium text-slate-800">
              {event.title}
            </p>

            <span
              className={`mt-1 inline-block text-xs font-semibold ${statusStyles[event.status]}`}
            >
              {event.status}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
