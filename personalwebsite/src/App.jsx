import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

function App() {
    return (

        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:slug" element={<ProjectDetailPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
}

export default App