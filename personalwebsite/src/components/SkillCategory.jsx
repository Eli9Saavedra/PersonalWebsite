import { useState } from 'react'
import { FaSyncAlt } from 'react-icons/fa'

function SkillCategory({ title, Icon, skills }) {
    const [flipped, setFlipped] = useState(false)

    return (
        <div
            className={`skill-category ${flipped ? 'flipped' : ''}`}
            onClick={() => setFlipped(prev => !prev)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setFlipped(prev => !prev)
                }
            }}
            aria-label={`${title} skills. Click to ${flipped ? 'see skills' : 'see years of experience'}.`}
        >
            <FaSyncAlt className="flip-affordance" aria-hidden="true" />
            <div className="skill-card-inner">
                <div className="skill-card-face skill-card-front">
                    <h3>{Icon && <Icon className="skill-category-icon" />} {title}</h3>
                    <ul>
                        {skills.map((skill) => (
                            <li key={skill.name}>
                                <skill.icon style={{ color: skill.color }} /> {skill.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="skill-card-face skill-card-back">
                    <div className="skill-experience">
                        <h3>Years of Experience</h3>
                        {skills.map((skill) =>
                            <div key={skill.name} className="skill-experience-row">
                                <span>{skill.name}</span>
                                <span className="years">{skill.years} {skill.years === 1 ? 'yr' : 'yrs'}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillCategory