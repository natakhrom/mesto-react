import React from 'react';
import logo from '../logo.svg';

function Header() {
    return (
        <header className="header">
                <img src={logo} className="logo" alt="Mesto Russia"/>
        </header>
    );
}

export default Header;