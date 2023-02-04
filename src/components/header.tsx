import * as React from 'react';

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <li>
                    <a href='/'>Logo - Home</a>
                </li>
                <ul className="nav-list">
                    <li>
                        <a href='/about'>NFT</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                    <li>
                        <a href='/about'>Privacy</a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header