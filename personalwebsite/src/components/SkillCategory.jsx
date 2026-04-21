// A reusable component that renders ONE skill category card.
// The parent (Skills.jsx) will render this component multiple times,
// passing different data each time via "props".
//
// "props" = properties. They are like function arguments for a component.
// Instead of writing function SkillCategory(props) and then using props.title,
// we "destructure" the props object directly in the parameter list below.
// { title, emoji, skills } pulls those three keys off of props in one step.
function SkillCategory({ title, emoji, skills }) {
    return (
        // A component must return a SINGLE root element (or a fragment <>...</>).
        <div className="skill-category">

            {/*
                Curly braces { } in JSX mean "run JavaScript here".
                So {emoji} outputs the emoji string, and {title} outputs the title.
                Anything outside braces is treated as literal text/HTML.
            */}
            <h3>{emoji} {title}</h3>

            <ul>
                {/*
                    .map() loops over the skills array and returns a new array of <li> elements.
                    React knows how to render an array of elements — it just lists them out.

                    Arrow function syntax used here:
                        (skill) => ( <li>...</li> )
                    The parentheses around the <li> mean "implicitly return this JSX".
                    Equivalent to: (skill) => { return <li>...</li> }
                */}
                {skills.map((skill) => (
                    // "key" is a special React prop required on items in a list.
                    // It helps React identify which items changed/added/removed
                    // so it can update the DOM efficiently. Must be unique per sibling.
                    <li key={skill.name}>
                        {/*
                            skill.icon is a COMPONENT reference (e.g. SiReact) we stored
                            in skillsData.js — not JSX, just the component itself.
                            Because it's a value, we render it with <skill.icon /> syntax.
                            The capital letter on the value (SiReact) is what makes React
                            treat it as a component instead of an HTML tag.

                            style={{ color: skill.color }} — the OUTER braces mean "JS expression",
                            the INNER braces are a JavaScript object literal { color: '...' }.
                            That's why inline styles always have double braces in JSX.
                        */}
                        <skill.icon style={{ color: skill.color }} /> {skill.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

// Makes this component importable from other files via:
//   import SkillCategory from './SkillCategory'
export default SkillCategory