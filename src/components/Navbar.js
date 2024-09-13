import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const links = [
        { path: '/', label: 'Home' },
        { path: '/create', label: 'Create' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="modal-navbar">
            <ul>
                {links.map((linkObj, idx) => (
                    <li key={idx}>
                        <Link to={linkObj.path}>{linkObj.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;