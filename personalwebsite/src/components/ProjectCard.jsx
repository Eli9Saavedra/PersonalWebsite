import { Link } from 'react-router-dom'

function ProjectCard({ title, role, isPrivate, slug, image, alt}) {
    return (
        <Link to={`/projects/${slug}`} className="project-card">
            <img src={image} alt={alt} className="project-image" />
            <h3>{title}</h3>
            {isPrivate && <span className="nda-badge">🔒 Internal Private</span>}
            <p className="project-role">{role}</p>
        </Link>
    )
}

export default ProjectCard