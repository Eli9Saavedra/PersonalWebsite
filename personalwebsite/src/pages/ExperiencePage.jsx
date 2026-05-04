import { Link } from 'react-router-dom'
import { FaReact } from 'react-icons/fa'
import { work, education, currentlyFocus } from '../data/experienceData'
import StatTile from '../components/StatTile'

function monthsSince(isoDate) {
    const start = new Date(isoDate)
    const now = new Date()
    return (now.getFullYear() - start.getFullYear()) * 12
        + (now.getMonth() - start.getMonth())
}

function ExperiencePage() {
    const job = work[0]
    const monthsAtEpcad = monthsSince('2024-08-01')

    const stats = [
        { value: monthsAtEpcad, suffix: '', label: 'Months at EPCAD', duration: 1500 },
        { value: 10, suffix: '+', label: 'Apps shipped' },
        { value: 151, suffix: '+', label: 'Daily users', duration: 1500 },
        { value: education.length, suffix: '', label: 'Degrees earned' }
    ]

    return (
        <section className="experience">

            

            {/* AT-A-GLANCE STATS (full width) */}
            <div className="experience-stats">
                {stats.map((stat) => (
                    <StatTile key={stat.label} stat={stat} />
                ))}
            </div>

            {/* TWO-COLUMN MAIN */}
            <div className="experience-grid">

                {/* LEFT — Role spotlight */}
                <article className="role-spotlight">
                    <span className="section-eyebrow">The Role</span>
                    <h2>{job.title} <span className="at">at</span> {job.company}</h2>
                    <p className="role-meta">{job.startDate} — {job.endDate}</p>

                    <div className="role-section">
                        <h3>Key Contributions</h3>
                        <ol className="contributions-numbered">
                            {job.contributions.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ol>
                    </div>

                    {job.flagshipProjectSlug && (
                        <Link to={`/projects/${job.flagshipProjectSlug}`} className="cta-button">
                            View Flagship Project →
                        </Link>
                    )}
                </article>

                {/* RIGHT — sidebar */}
                <aside className="experience-sidebar">

                    {/* Vertical mini-arc */}
                    <div className="sidebar-card">
                        <span className="section-eyebrow">The Arc</span>
                        <ul className="mini-arc">
                            <li className="mini-arc-event">
                                <span className="mini-arc-dot"></span>
                                <div className="mini-arc-info">
                                    <span className="mini-arc-date">Apr 2024</span>
                                    <span className="mini-arc-label">B.S., Software Development</span>
                                </div>
                            </li>
                            <li className="mini-arc-event mini-arc-event-active">
                                <span className="mini-arc-dot mini-arc-dot-pulsing"></span>
                                <div className="mini-arc-info">
                                    <span className="mini-arc-date">Aug 2024</span>
                                    <span className="mini-arc-label">Joined EPCAD as Software Developer</span>
                                </div>
                            </li>
                            <li className="mini-arc-event">
                                <span className="mini-arc-dot"></span>
                                <div className="mini-arc-info">
                                    <span className="mini-arc-date">Oct 2025</span>
                                    <span className="mini-arc-label">M.S. — completed while working full-time</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Now — currently focused */}
                    <div className="sidebar-card now-card">
                        <FaReact className="now-icon" />
                        <div className="now-content">
                            <span className="now-label">Now</span>
                            <p>{currentlyFocus}</p>
                        </div>
                    </div>

                    {/* Tech stack pills */}
                    <div className="sidebar-card">
                        <span className="section-eyebrow">Tech Stack</span>
                        <div className="role-tech">
                            {job.tech.map((item) => (
                                <span key={item} className="tech-item">{item}</span>
                            ))}
                        </div>
                    </div>

                </aside>
            </div>

            {/* Bottom CTA */}
            <div className="experience-cta">
                <Link to="/projects" className="cta-button cta-button-secondary">
                    See All Projects
                </Link>
            </div>

        </section>
    )
}

export default ExperiencePage