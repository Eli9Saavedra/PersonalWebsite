import { useParams, Link } from 'react-router-dom' 
import { FiArrowLeft } from 'react-icons/fi'
import projectsData from '../data/projectsData'
import NotFoundPage from './NotFoundPage'

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
                <img className="project-image" src={project.image} alt={project.alt} />
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
                        <div key={stat.label} className="stat-tile">
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
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