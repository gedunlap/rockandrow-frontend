import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="nav">
            <Link to='/' style={{textDecoration: "none"}}>
                <div>Home</div>
            </Link>
            <img src="https://i.imgur.com/hSdfdNu.png" alt="" />
            <Link to='/list' style={{textDecoration: "none"}}>
                <div>Rock N Row</div>
            </Link>
        </nav>
    )
}
