import projectsData from '../data/projectsData'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="section-container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    {projectsData.map((project) =>
                        <ProjectCard key={project.title} {...project} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Projects