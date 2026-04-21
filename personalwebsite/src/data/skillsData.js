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
            { name: 'React', icon: SiReact, color: '#61DAFB' },
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
            { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
            { name: 'CSS', icon: SiCss, color: '#1572B6' }
        ]
    },
    {
        title: 'Backend',
        emoji: '⚙️',
        skills: [
            { name: 'C#', icon: TbBrandCSharp, color: '#239120' },
            { name: '.NET', icon: SiDotnet, color: '#512BD4' },
            { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
            { name: 'Python', icon: SiPython, color: '#3776AB' },
            { name: 'Java', icon: FaJava, color: '#ED8B00' }
        ]
    },
    {
        title: 'Database',
        emoji: '🗄️',
        skills: [
            { name: 'SQL Server', icon: FaDatabase, color: '#CC2927' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }
        ]
    },
    {
        title: 'Tools',
        emoji: '🛠️',
        skills: [
            { name: 'Git', icon: VscGithub, color: '#F05032' },
            { name: 'Visual Studio', icon: DiVisualstudio, color: '#5C2D91' },
            { name: 'VS Code', icon: VscCode, color: '#007ACC' },
            { name: 'Azure', icon: VscAzure, color: '#0078D4' }
        ]
    }
]

export default skillsData