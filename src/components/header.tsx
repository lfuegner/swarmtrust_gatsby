import * as React from 'react';
import { Link, HeadFC, PageProps } from "gatsby"

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <Link to = "/about">About</Link>
                
                <ul className="nav-list">
                    <li>
                        <Link to = "/products" className='nav-item'>Products</Link>
                    </li>
                    <li>
                        <Link to = "/about">About</Link>
                    </li>
                    <li>
                        <Link to = "/privacy">Privacy</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header