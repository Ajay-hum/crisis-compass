export default function InfoSection ({ title, items, icon: Icon }) {
    if (!items || items.length === 0) return null;

    return (
        <section className="mt-8">
            <div className="flex items-center gap-2">
                {Icon && <Icon className="w-5 h-5 text-slate-700" aria-hidden />}
                <h2 className="text-lg font-semibold text-slate-900">
                {title}
                </h2>
            </div>

            <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700">
                {items.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    )
}