import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <div style={{
            padding: '8rem 2rem',
            textAlign: 'center',
        }} >
            <h1>404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <Link to="/">← Back home</Link>
        </div>
    )
}

export default NotFoundPage