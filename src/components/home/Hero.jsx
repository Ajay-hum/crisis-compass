export default function Hero() {
    return(
        <section className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
                    Crisis Compass
                </h1>

                <p className="mt-6 text-lg md:text-xl text-slate-600">
                    Clear, reliable guidance to help people understand global and local crises — and know what to do next.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <button className="px-6 py-3 rounded-lg bbg-blue-600 text-white font-medium hover:bg-blue-700">
                        View Current Crises
                    </button>
                    <button className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    )
}