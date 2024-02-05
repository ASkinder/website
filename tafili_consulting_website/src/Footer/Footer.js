import React, { useState, useEffect } from 'react';
import './Footer.css';
import adress from '../Img/adress.png';
import phone from '../Img/phone.png';
import email from '../Img/email.png';

function Footer() {
    return (
        <div className="Footer">
            <footer className="App-footer">
                <div className="ei39_1037_105_619">
                    <div className="e39_1056"></div>
                    <div className='footer-part2'>
                        <br /><br /><br /><br />
                        <div className='address'>
                            <img src={adress} alt="Address Icon" />
                            <div className="address-info">
                                <h1>Address</h1>
                                <p>Robbroeklaan 15, 1785 Merchtem</p>
                            </div>
                        </div>
                        <div className='email'>
                            <img src={email} alt="Email Icon" />
                            <div className="email-info">
                                <h1>Email</h1>
                                <p>d.tafili@tafiliconsulting.be</p>
                            </div>
                        </div>
                        <div className='phone'>
                            <img src={phone} alt="Phone Icon" />
                            <div className="phone-info">
                                <h1>Phone</h1>
                                <p>+32 472 19 41 24</p>
                            </div>
                        </div>
                        <br /><br /> <br /><br />
                    </div>
                </div>
            </footer>
        </div>
    );
}


export default Footer;
