import skillsData from '../data/skillsData'
import SkillCategory from '../components/SkillCategory'
import StatTile from '../components/StatTile'

function Skills() {
    const totalTechnologies = skillsData.reduce((sum, c) => sum + c.skills.length, 0)
    const yearsCoding = Math.max(...skillsData.flatMap(c => c.skills.map(s => s.years)))
    const categoriesCount = skillsData.length

    const stats = [
        { value: yearsCoding, suffix: '+', label: 'Years Coding' },
        { value: totalTechnologies, label: 'Technologies' },
        { value: categoriesCount, label: 'Categories' }
    ]

    return (
        <section className="skills" id="skills">
            <div className="section-container">
                <header className="skills-header">
                    <h2>My Skills & Technologies</h2>
                    <p className="skills-hint">Tap any card to see years of experience</p>
                </header>

                <div className="skills-stats">
                    {stats.map((s) => (
                        <StatTile key={s.label} stat={s} />
                    ))}
                </div>

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