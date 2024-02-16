import React from 'react';
import './Mbc.css';
import videoMbc from '../Img/MicrosoftBusinessCentral.mp4'

function Mbc() {
    return (
        <div className="Mbc">
            <div className="Mbc1">
                <br/>
                <div className="content-wrapper">
                    <div className="rectangle-gauche">
                        <span className="mbc-title">Microsoft Business Central</span>
                        <br/>
                        <span className="mbc-intro">"Business central" typically refers to a central hub or software solution for managing various aspects of a business, often associated with Microsoft Dynamics 365 Business Central in the context of enterprise resource planning (ERP)</span>
                    </div>
                    <div className="video-container">
                        <video className="videoMBC" controls>
                            <source src={videoMbc} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
            <br/><br/>

        </div>
    );
}

export default Mbc;
