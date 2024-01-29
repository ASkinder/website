import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../Img/LogoTafili.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const menuIcon = document.querySelector('.menuIcon');
        const nav = document.querySelector('.overlay-menu');

        const handleMenuToggle = () => {
            setIsMenuOpen(!isMenuOpen);
        };

        menuIcon.addEventListener('click', handleMenuToggle);

        return () => {
            menuIcon.removeEventListener('click', handleMenuToggle);
        };
    }, [isMenuOpen]);

    return (
        <div className="Header">
            <header className="App-header">

                <nav id="navbar" className="">
                    <div className="nav-wrapper">

                        <div className="logo">
                            <a href="/"> <img src={logo} alt="Logo Tafili" id='imageLogo' /></a>
                        </div>

                        <ul id="menu">
                            <li><a href="services">Services</a></li>
                            <li><a href="sectors">Sectors</a></li>
                            <li><a href="yetoo">Yetoo</a></li>
                            <li><a href="contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>

                <div className={`menuIcon ${isMenuOpen ? 'toggle' : ''}`}>
                    <span className="icon icon-bars"></span>
                    <span className="icon icon-bars overlay"></span>
                </div>

                <div className="overlay-menu" style={{ transform: isMenuOpen ? 'translateX(0%)' : 'translateX(-100%)' }}>
                    <ul id="menu">
                        <li><a href="services">Services</a></li>
                        <li><a href="sectors">Sectors</a></li>
                        <li><a href="yetoo">Yetoo</a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;
