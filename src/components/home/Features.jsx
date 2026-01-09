const features = [
  {
    title: "Understand What’s Happening",
    description:
      "We break down complex crises into simple, human-friendly explanations."
  },
  {
    title: "Know What To Do",
    description:
      "Actionable guidance that helps you respond safely and responsibly."
  },
  {
    title: "Stay Prepared",
    description:
      "Learn what to watch out for and how to prepare for future risks."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-slate-900">
          Why Crisis Compass?
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-slate-200"
            >
              <h3 className="text-xl font-medium text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
