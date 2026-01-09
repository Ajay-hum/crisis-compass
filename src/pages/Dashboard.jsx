import crisisData from "../data/crises"

export default function Dashboard () {
    return (
        <section>
            <h1 className="bg-blue-500">Current Crises
                <div className="crisis-list">
                    {crisisData.map((crisis) => (
                    // For each item, render a component and provide a unique 'key' prop
                    // Replace <CrisisCard /> with your actual card component
                    <div key={crisis.id} className="crisis-card">
                        <h3>{crisis.title}</h3>
                        <p>{crisis.description}</p>
                        <p>Severity: {crisis.severity}</p>
                    </div>
                    ))}
                </div>
            </h1>
        </section>
    )
}