import { SiReact, SiJavascript, SiHtml5, SiCss, SiDotnet, SiNodedotjs, SiPython, SiMongodb } from 'react-icons/si'
import { FaJava, FaDatabase } from 'react-icons/fa'
import { VscCode, VscAzure, VscGithub } from 'react-icons/vsc'
import { DiVisualstudio } from 'react-icons/di'     
import { TbBrandCSharp } from 'react-icons/tb'

const skillsData = [
    {
        title: 'Frontend',
        emoji: '🎨',
        skills: [
            { name: 'React', icon: SiReact, color: '#61DAFB', years: 1 },
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', years: 2 },
            { name: 'HTML', icon: SiHtml5, color: '#E34F26', years: 3 },
            { name: 'CSS', icon: SiCss, color: '#1572B6', years: 3 }
        ]
    },
    {
        title: 'Backend',
        emoji: '⚙️',
        skills: [
            { name: 'C#', icon: TbBrandCSharp, color: '#239120', years: 2 },
            { name: '.NET', icon: SiDotnet, color: '#512BD4', years: 2 },
            { name: 'Node.js', icon: SiNodedotjs, color: '#339933', years: 1 },
            { name: 'Python', icon: SiPython, color: '#3776AB', years: 1 },
            { name: 'Java', icon: FaJava, color: '#ED8B00', years: 2 }
        ]
    },
    {
        title: 'Database',
        emoji: '🗄️',
        skills: [
            { name: 'SQL Server', icon: FaDatabase, color: '#CC2927', years: 2 },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248', years: 1 }
        ]
    },
    {
        title: 'Tools',
        emoji: '🛠️',
        skills: [
            { name: 'Git', icon: VscGithub, color: '#F05032', years: 2 },
            { name: 'Visual Studio', icon: DiVisualstudio, color: '#5C2D91', years: 2 },
            { name: 'VS Code', icon: VscCode, color: '#007ACC', years: 2 },
            { name: 'Azure', icon: VscAzure, color: '#0078D4', years: 2 }
        ]
    }
]

export default skillsData