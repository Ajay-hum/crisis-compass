export default function InfoSection ({ title, items }) {
    if (!items || items.length === 0) return null;

    return (
        <section className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
            <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    )
}