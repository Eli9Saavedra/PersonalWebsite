
import profilePic from '../assets/hero.png'
function Hero() {
    return (

            <section className="hero" id="home">
                <div className="hero-content">
                    <div className="hero-image">
                        <img src={profilePic} alt="Profile" className="profile-pic" />
                    </div>
                    <div className="hero-text">
                        <h1>Elijah Saavedra</h1>
                        <h2><span className="highlight">Full Stack Developer</span></h2>
                        <p>Hello, I'm currently a Software Developer looking for new opportunities.</p>
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