import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function Contact() {
    const formRef = useRef(null)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
    const [errorMsg, setErrorMsg] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            setStatus('error')
            setErrorMsg('Email service is not configured. Please reach out via email or LinkedIn instead.')
            return
        }

        setStatus('sending')
        setErrorMsg('')

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
                publicKey: PUBLIC_KEY,
            })
            setStatus('success')
            setName('')
            setEmail('')
            setMessage('')
        } catch (err) {
            console.error('EmailJS error:', err)
            setStatus('error')
            setErrorMsg('Something went wrong sending your message. Please try again or email me directly.')
        }
    }

    const isSending = status === 'sending'

    return (
        <section className="contact" id="contact">
            <div className="section-container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-links">
                    <a href="mailto:elijah9801x@gmail.com">📧 Email</a>
                    <a href="https://www.linkedin.com/in/elijaharturosaavedra" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
                    <a href="https://github.com/Eli9Saavedra" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
                </div>

                <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                    {/* Name input — `name` attr matches {{from_name}} in EmailJS template */}
                    <label>
                        Name
                        <input
                            type="text"
                            name="from_name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={isSending}
                            required
                        />
                    </label>

                    {/* Email input — `name` attr matches {{from_email}} in EmailJS template */}
                    <label>
                        Email
                        <input
                            type="email"
                            name="from_email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isSending}
                            required
                        />
                    </label>

                    {/* Message — `name` attr matches {{message}} in EmailJS template */}
                    <label>
                        Message
                        <textarea
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="5"
                            disabled={isSending}
                            required
                        />
                    </label>

                    <button type="submit" disabled={isSending}>
                        {isSending ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                {status === 'success' && (
                    <p className="success-message" role="status">
                        ✅ Thanks! I'll get back to you soon.
                    </p>
                )}
                {status === 'error' && (
                    <p className="error-message" role="alert">
                        ⚠️ {errorMsg}
                    </p>
                )}
            </div>
        </section>
    )
}

export default Contact