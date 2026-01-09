import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">
          Stay informed. Stay safe.
        </h2>

        <p className="mt-4 text-slate-300">
          Explore current crises and learn how to respond responsibly.
        </p>

        <Link
          to="/dashboard"
          className="inline-block mt-8 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700"
        >
          Go to Dashboard
        </Link>
      </div>
    </section>
  );
}
