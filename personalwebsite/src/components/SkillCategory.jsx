import { useState } from 'react' 


function SkillCategory({ title, emoji, skills }) {

    const [flipped, setFlipped] = useState(false)

    return (

        <div className={`skill-category ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(prev => !prev)}>
            <div className="skill-card-inner">
                <div className="skill-card-face skill-card-front">
                    <h3>{emoji} {title}</h3>
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