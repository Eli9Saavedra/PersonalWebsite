import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi' 


function Navbar() {

    const { theme, toggleTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const closeMenu = () => setIsOpen(false)

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={closeMenu}>ES</Link>         
                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
                    <li><NavLink to="/skills" onClick={closeMenu}>Skills</NavLink></li>
                    <li><NavLink to="/experience" onClick={closeMenu}>Experience</NavLink></li>
                    <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
                    <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
                </ul>
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">{theme === 'light' ? <FiMoon /> : <FiSun />}</button>
            </div>
        </nav>
    )
}

export default Navbar
