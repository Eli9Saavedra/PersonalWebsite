function ProjectCard({ title, description, role, tech, highlights, isPrivate, github, demo, repoUrl }) {
    return (
        <div
            className="project-card"
            onClick={repoUrl ? () => window.open(repoUrl, '_blank', 'noopener,noreferrer') : undefined}
            style={repoUrl ? { cursor: 'pointer' } : undefined}
        >
            <h3>{title}</h3>
            {isPrivate && <span className="nda-badge">🔒 Internal Private</span>}
            <p className="project-role">{role}</p>
            <p className="project-description">{description}</p>
                <ul className="project-highlights">
                    {highlights.map((item) => (
                    <li key={item}>{item}</li>
                    ))}
            </ul>
            <div className="project-tech">   
                {tech.map((item) => (
                    <span key={item} className="tech-item">{item}</span>
                ))}
            </div>
            <div className="project-links">
                {isPrivate ? (
                    <span className="private-note">🔒 Source private — 🎥 click for demo</span>
                ) : (
                        <>
                            {github && <a href={github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Github</a>}
                            {demo && <a href={demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Live Demo</a>}
                        </>
                )}
            </div>
            {repoUrl && (
            <div className="demo-notice">
                🎥 Click anywhere on this card to view the demo
            </div>
)}
        </div>
    )
}

export default ProjectCard