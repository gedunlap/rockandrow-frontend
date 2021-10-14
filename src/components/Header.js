import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="nav">
            <img src="https://i.imgur.com/hSdfdNu.png" alt="rock and row logo" className="navitem" />
            <Link to='/' style={{textDecoration: "none"}} className="navitem">
                <div>Home</div>
            </Link>
            <Link to='/list' style={{textDecoration: "none"}} className="navitem">
                <div>Log</div>
            </Link>
        </nav>
    )
}
