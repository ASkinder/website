import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../Img/Tafili-logo-petit.png';
import maison from '../Img/maison.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1000);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const handleResize = () => {
        if (window.innerWidth <= 1000) {
            setIsScrolled(true);
            setIsMobileView(true);
        } else {
            setIsScrolled(false);
            setIsMobileView(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="Header">
            <header className={`App-header ${isScrolled ? 'scrolled' : ''}`}>
                {/* Navbar classique */}
                {!isMobileView && (
                    <nav className={`navbar`}>
                        <div className="navbar-logo">
                            <a href="/">
                                <img src={logo} alt="Logo"/>
                            </a>
                        </div>
                        <ul className="navbar-menu">
                            <li><a  href="/"><img src={maison} alt="home icon" class="home-icon"/></a></li>
                            <li><a href="/about">About us</a></li>
                            <li><a href="/financial">Financial</a></li>
                            <li><a href="/dataanalyst">Data analyst & IT</a></li>
                            <li><a href="/contact">Contact us</a></li>
                        </ul>
                    </nav>
                )}

                {/* Bouton Menu en Overlay */}
                <div className={`menuIcon ${isMobileView ? '' : 'hide'} ${isMenuOpen ? 'toggle' : ''}`}
                     onClick={handleMenuToggle}>
                    <span className="icon icon-bars"></span>
                    <span className="icon icon-bars overlay"></span>
                </div>

                {/* Menu Overlay */}
                <div
                    className="overlay-menu"
                    style={{transform: isMenuOpen ? 'translateX(0%)' : 'translateX(-100%)'}}
                >
                    <ul id="menu">
                        <li><a href="/yetoo">Yetoo</a></li>
                        <li><a href="/powerbi">Power BI</a></li>
                        <li><a href="/team">Meet Us</a></li>
                        <li><a href="/contact">Contact us</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;
