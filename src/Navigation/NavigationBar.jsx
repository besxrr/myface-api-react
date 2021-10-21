import React from 'react'
import { Link } from 'react-router-dom'

export function NavigationBar() {
    return (
        <nav className="navbar">
            <Link to="/posts" className="large-title">MyFace</Link>
            <ul className="page-links">
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
        </nav>
    )
}
