import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi' 


function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme')
        if (saved) return saved
        // fallback: respect OS-level preference if available
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
        return 'light'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

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
                <button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle theme">{theme === 'light' ? <FiMoon /> : <FiSun />}</button>
            </div>
        </nav>
    )
}

export default Navbar
