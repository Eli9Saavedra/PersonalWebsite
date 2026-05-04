import {useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom' 
import { FiArrowLeft } from 'react-icons/fi'
import projectsData from '../data/projectsData'
import NotFoundPage from './NotFoundPage'
import useCountUp from '../hooks/useCountUp'

/**
 * Renders a single stat tile on the Project Details page.
 * If the stat's value is number, it animates from 0 up to the target using the useCountUp hook
 * If the stat's value is a string, it skips the animation and renders the value as-is
 * @param {any} param0
 * @returns
 */
function StatTile({ stat }) {
    const [hasStarted, setHasStarted] = useState(false)
    const tileRef = useRef(null)
    const isNumeric = typeof stat.value === 'number'
    const count = useCountUp(isNumeric && hasStarted ? stat.value : 0, stat.duration)

    useEffect(() => {
        if (!tileRef.current || hasStarted) return
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setHasStarted(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )

        observer.observe(tileRef.current)
        return () => observer.disconnect()
    }, [hasStarted])

    return (
        <div className="stat-tile" ref={tileRef}>
            <div className="stat-value">
                {isNumeric ? Math.round(count) : stat.value}
                {stat.suffix }
            </div>
            <div className="stat-label">
                {stat.label}
            </div>
        </div>
    )
}


function ProjectDetailPage() {

    const { slug } = useParams()
    const project = projectsData.find((p) => p.slug === slug)

    if (!project) {
        return <NotFoundPage />
    }

    return (
        <section className="project-detail">
            <Link to="/projects" className="back-link">
                <FiArrowLeft aria-hidden="true" />
                <span>Back to Projects</span>
            </Link>
            <div className="project-hero">
                {project.demoUrl ? (
                    <iframe
                        className="project-video"
                        src={project.demoUrl}
                        title={`${project.title} demo video`}
                        frameBorder="0"
                        allowFullScreen
                    />
                ) : (
                    <img className="project-image" src={project.image} alt={project.alt} />
                )}
            </div>
            <header className="project-header">
                <h1>{project.title}</h1>
                {project.isPrivate && <span className="nda-badge">🔒 Internal Private</span>}
                <p className="project-role">{project.role}</p>
                <p className="project-description">{project.description}</p>
            </header>
            <div className="project-stats">
                {project.stats && project.stats.length > 0 && (
                    project.stats.map((stat) => (
                        <StatTile key={stat.label} stat={stat} />
                    ))
                )}
            </div>
            <div className="project-detail-grid">
                <div className="project-main">
                    {project.problem && (
                        <section>
                            <h2 id="the-problem">The Problem</h2>
                            <p>{project.problem}</p>
                        </section>
                    )}
                    {project.contributions && project.contributions.length > 0 && (
                        <section>
                            <h2 id="what-i-built">What I Built</h2>
                            <ul>
                                {project.contributions.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    )}
                    {project.highlights && project.highlights.length > 0 && (
                        <section>
                            <h2 id="highlights">Highlights</h2>
                            <ul className="project-highlights">
                                {project.highlights.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
                <aside className="project-sidebar">
                    <div className="sidebar-block">
                        <h3>Role</h3>
                        <p>{project.role}</p>
                    </div>
                    {project.tech && project.tech.length > 0 && (
                        <div className="sidebar-block">
                            <h3>Tech Stack</h3>
                            <div className="project-tech">
                                {project.tech.map((item) => (
                                    <span key={item} className="tech-item">{item}</span>
                                )) }
                            </div>
                        </div>
                    )}
                    <div className="sidebar-block">
                        <h3>Status</h3>
                        {project.isPrivate ? (
                            <span className="private-note">🔒 Source private - internal company projects</span>
                        ) : (
                            <span>Open source</span>
                        )}
                    </div>
                    {!project.isPrivate && project.repoUrl && (
                        <div className="sidebar-block">
                            <h3>Links</h3>
                            <div className="project-links">
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    )}
                </aside>
            </div>
            
        </section>
    )
}

export default ProjectDetailPage