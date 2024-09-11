import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="Header">
            <header className="App-header">
                {/* Bouton Menu en Overlay */}
                <div className={`menuIcon ${isMenuOpen ? 'toggle' : ''}`} onClick={handleMenuToggle}>
                    <span className="icon icon-bars"></span>
                    <span className="icon icon-bars overlay"></span>
                </div>

                {/* Menu Overlay */}
                <div
                    className="overlay-menu"
                    style={{ transform: isMenuOpen ? 'translateX(0%)' : 'translateX(-100%)' }}
                >
                    <ul id="menu">
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/yetoo">Yetoo</a>
                        </li>
                        <li>
                            <a href="/powerbi">Power BI</a>
                        </li>
                        <li>
                            <a href="/team">Meet Us</a>
                        </li>
                        <li>
                            <a href="/contact">Rejoignez-nous</a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;
