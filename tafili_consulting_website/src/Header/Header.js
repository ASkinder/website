import React, { useState } from 'react';
import './Header.css';
import logo from '../Img/LogoTafili.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="Header">
            <header className="App-header">

                <nav id="navbar" className="">
                    <div className="nav-wrapper">

                        <div className="logo">
                            <a href="/"> <img src={logo} alt="Logo Tafili" id='imageLogo'/></a>
                        </div>

                        <ul id="menu" className={isMenuOpen ? 'open' : ''}>
                            <li><a href="/home/#services">Services</a></li>
                            <li><a href="/home/#sectors">Sectors</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>

                <div className={`menuIcon ${isMenuOpen ? 'toggle' : ''}`} onClick={handleMenuToggle}>
                    <span className="icon icon-bars"></span>
                    <span className="icon icon-bars overlay"></span>
                </div>

                <div className="overlay-menu" style={{transform: isMenuOpen ? 'translateX(0%)' : 'translateX(-100%)'}}>
                    <ul id="menu">
                        <li><a href="/home/#services">Services</a></li>
                        <li><a href="/home/#sectors">Sectors</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;