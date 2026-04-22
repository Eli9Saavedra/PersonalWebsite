import { useState } from 'react'

function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        console.log({ name, email, message })
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
    }

return (
    <section className="contact" id="contact">
        <div className="section-container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-links">
                <a href="mailto:elijah9801x@gmail.com">📧 Email</a>
                <a href="https://www.linkedin.com/in/elijaharturosaavedra" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
                <a href="https://github.com/Eli9Saavedra" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                {/* Name input */}
                <label>
                    Name
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>

                {/* Email input — note type="email" gives basic browser validation */}
                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>

                {/* Textarea for message */}
                <label>
                    Message
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="5"
                        required
                    />
                </label>

                <button type="submit">Send Message</button>
            </form>

            {/* Conditional success message */}
            {submitted && <p className="success-message">✅ Thanks! I'll get back to you soon.</p>}
        </div>
    </section>
    )

}

export default Contact