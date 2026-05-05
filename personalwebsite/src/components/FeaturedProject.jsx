import { Link } from 'react-router-dom'
import projectsData from '../data/projectsData'
import StatTile from './StatTile'

function FeaturedProject() {
    const project = projectsData.find((p) => p.slug === 'epcad-intranet')
    if (!project) return null

    /**
     * project.stats - Full stats array from the EPCAD data, has 3 items in it
     * .slice(0,3) Built-in array method that returns a NEW array containing items from index 0 up to index 2
     * TLDR: Instead of getting every single data from the project, it just takes the 3 we want from a certain range
     */
    const featuredStats = project.stats.slice(0, 3)

    return (
        <section className="featured-project">
            <div className="featured-project-inner">
                <div className='featured-project-media'>
                    {project.videoFile ? (
                        <video
                            className="project-video"
                            src={project.videoFile}
                            poster={project.image}
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                            preload="metadata"
                        />
                    ) : project.demoUrl ? (
                        <iframe
                            className="project-video"
                            src={project.demoUrl}
                            title={`${project.title} demo video`}
                            frameBorder="0"
                            allowFullScreen
                        />
                    ) : (
                        <img
                            className="project-image"
                            src={project.image}
                            alt={project.alt}
                        />
                    )}
                </div>
                <div className="featured-project-content">
                    <span className="featured-label">Featured Case Study</span>
                    <h2>{project.title}</h2>
                    <p className="featured-role">{project.role}</p>
                    <p className="featured-tagline">{project.description}</p>
                    <div className="featured-stats">
                        {featuredStats.map((stat) => (
                            <StatTile key={stat.label} stat={stat} />
                        ))}
                    </div>
                    <Link to={`/projects/${project.slug}`} className="cta-button">View Case Study →</Link>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProject