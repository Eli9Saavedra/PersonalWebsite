import { useParams, Link } from 'react-router-dom' 
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
            <Link to="/projects">Back to Projects</Link>
            <img className="project-image" src={project.image} alt={project.alt} />
            <h1>{project.title}</h1>
                {project.isPrivate && <span className="nda-badge">🔒 Internal Private</span>}
                <p className="project-role">{project.role}</p>
                <p className="project-description">{project.description}</p>
            <h2>Highlights</h2>
                <ul className="project-highlights">
                    {project.highlights.map((item) =>
                        <li key={item}>{item}</li>
                    )}
                </ul>
            <h2>Tech Stack</h2>
                <div className="project-tech">
                    {project.tech.map((item) => (
                        <span key={item} className="tech-item">{item}</span>
                    ))}
                </div>
            <div className="project-links">
                {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                )}
                {project.isPrivate && (
                    <span className="private-note">🔒 Source private - internal compnay project</span>
                )}
            </div>
        </section>
    )
}

export default ProjectDetailPage