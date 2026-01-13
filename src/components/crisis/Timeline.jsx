export default function Timeline({ events }) {
  if (!events || events.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-slate-900">
        Timeline
      </h2>

      <ul className="mt-4 space-y-4 border-l-2 border-slate-200 pl-4">
        {events.map((event, index) => (
          <li key={index} className="relative">
            <span className="absolute -left-2 top-1 w-3 h-3 bg-blue-500 rounded-full" />
            <p className="text-sm text-slate-500">{event.date}</p>
            <p className="text-slate-700">{event.event}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
