import skillsData from '../data/skillsData'
import SkillCategory from '../components/SkillCategory'

function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="section-container">
                <h2 className="section-title">My Skills & Technologies</h2>
                <div className="skills-grid">
                    {skillsData.map((category) =>
                        <SkillCategory key={category.title} {...category} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Skills   