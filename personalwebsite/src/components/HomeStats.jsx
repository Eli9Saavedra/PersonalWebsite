import StatTile from './StatTile'

const stats = [
    { value: 2, suffix: '+', label: 'Years building production apps' },
    { value: 10, suffix: '+', label: 'Apps shipped at EPCAD', duration: 1200 },
    { value: 151, suffix: '+', label: 'Daily users on flagship app', duration: 1500 }
]

function HomeStats() {
    return (
        <section className="home-stats">
        <h2>By the Numbers</h2>
            <div className="home-stats-grid">
                {stats.map((stat) => (
                    <StatTile key={stat.label} stat={stat} />
                ))}
            </div>
        </section>
    )
}

export default HomeStats