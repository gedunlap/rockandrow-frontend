import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="nav">
            <Link to='/'>
                <div>Rock N Row</div>
            </Link>
        </nav>
    )
}
