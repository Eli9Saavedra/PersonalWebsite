import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi' 


function Navbar() {

    const { theme, toggleTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="#home" className="nav-logo">ES</a>         
                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">{theme === 'light' ? <FiMoon /> : <FiSun />}</button>
            </div>
        </nav>
    )
}

export default Navbar
