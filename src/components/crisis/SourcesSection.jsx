export default function SourcesSection({ sources }) {
  if (!sources || sources.length === 0) return null;

  return (
    <section className="mt-10 border-t pt-6">
      <h2 className="text-lg font-semibold text-slate-900">
        Sources & Verification
      </h2>

      <ul className="mt-3 space-y-2">
        {sources.map((source, index) => (
          <li key={index}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {source.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
