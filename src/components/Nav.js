import React from 'react'
import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/use-effect-lessons">
                    <li>Use Effect Lessons</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/members">
                    <li>Members</li>
                </Link>
                <Link to="/members/">
                    <li>Profile</li>
                </Link>
            </ul>
        </nav>
    )
}
