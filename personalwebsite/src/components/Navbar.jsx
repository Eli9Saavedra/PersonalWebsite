import { useState } from 'react'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="nav-container">
                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
