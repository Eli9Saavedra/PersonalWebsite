import profilePic from '../assets/profilePic.jpg'
import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'


function Hero() {
    return (

            <section className="hero" id="home">
                <div className="hero-content">
                    <div className="hero-image">
                        <img src={profilePic} alt="Profile" className="profile-pic" />
                    </div>
                    <div className="hero-text">
                        <h1>Elijah Saavedra</h1>
                        <p className="hero-location">
                            📍 El Paso, TX · Open to relocate to Phoenix, AZ
                        </p>
                        <h2>
                            Software Developer · <span className="highlight">C# / .NET / Blazor</span>
                        </h2>
                                            <p>
                            I&apos;m the developer who turns &ldquo;we&apos;ve always done it in
                            Excel&rdquo; into shipped software. Two years at the El Paso Central
                            Appraisal District &mdash; ~10 production apps, including an internal
                            portal serving 151+ employees daily. Currently sharpening React on the
                            side (this site is one of those projects).
                    </p>
                    <div className="hero-cta-group">
                        <Link to="/projects" className='cta-button' >View My Work</Link>
                        <Link to="/contact" className="cta-button cta-button-secondary">Get In Contact With Me</Link>
                    </div>
                    <div className="hero-socials">
                        <a href="https://github.com/Eli9Saavedra" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
                        <a href="mailto:elijah9801x@gmail.com" aria-label="Email"><FiMail /></a>
                        <a href="https://www.linkedin.com/in/elijaharturosaavedra" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
                    </div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <span></span>
                    <p>Scroll Down</p>
                </div>
            </section>
       
    )
}

export default Hero