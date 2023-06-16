import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div>
            <h1>Te has perdido, vuelve casa.</h1>
            <Link to="/">Volver a casa</Link>
        </div>
    )
}

export default ErrorPage