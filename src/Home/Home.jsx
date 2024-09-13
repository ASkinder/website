import React, {useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import videoLogo from '../Img/tafili.mp4';
import icon1 from '../Img/icon1.png';
import icon2 from '../Img/icon2.png';
import icon3 from '../Img/icon3.png';
import trustCompany from '../Img/TrustCompany.png';
import yetooVideo from '../Img/YetooHD.mp4';
import powerbiVideo from '../Img/PowerBI.mp4';
import mbcVideo from '../Img/MBC.mp4';
import './Home.css';
import {Link} from "react-router-dom";

function Home() {
    const yetooVideoRef = useRef(null);
    const powerbiVideoRef = useRef(null);
    const mbcVideoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // Gestion des vidéos lors du scroll
            const handleVideoPlayPause = (videoRef) => {
                if (videoRef.current) {
                    const rect = videoRef.current.getBoundingClientRect();
                    // Vidéo visible en partie ou entièrement
                    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                    if (isVisible && videoRef.current.paused) {
                        console.log(`Playing ${videoRef.current.src}`);
                        videoRef.current.play().catch(error => console.log(error));
                    } else if (!isVisible && !videoRef.current.paused) {
                        console.log(`Pausing ${videoRef.current.src}`);
                        videoRef.current.pause();
                    }
                }
            };

            // Appelle la fonction de gestion pour chaque vidéo
            handleVideoPlayPause(yetooVideoRef);
            handleVideoPlayPause(powerbiVideoRef);
            handleVideoPlayPause(mbcVideoRef);
        };

        // Gestion de la visibilité de l'onglet
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                // Recommence à vérifier lorsque l'onglet devient visible
                handleScroll();
            } else {
                // Met en pause toutes les vidéos quand l'onglet est caché
                if (yetooVideoRef.current) yetooVideoRef.current.pause();
                if (powerbiVideoRef.current) powerbiVideoRef.current.pause();
                if (mbcVideoRef.current) mbcVideoRef.current.pause();
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        handleScroll(); // Vérifie l'état initial des vidéos au chargement

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return (
        <div className="Home">
            <div className="video-container">
                <video
                    className="background-video"
                    autoPlay
                    muted
                    onEnded={(e) => e.currentTarget.pause()} // Pause la vidéo à la fin
                    playsInline
                >
                    <source src={videoLogo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="overlay-text">
                    <h1>THE SUITABLE SOLUTION FOR YOUR FINANCE FUNCTIONS</h1>
                    <Link to="/team" className="learn-more-button-1">En savoir plus</Link>
                </div>
            </div>

            <div className="video-container" id="yetoo">
                <video
                    ref={yetooVideoRef}
                    className="background-video"
                    muted
                    playsInline
                >
                    <source src={yetooVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="overlay-text-2">
                    <h1>
                        Real-time data analysis and decision-making. Offering dashboards, financial reporting, and tools
                        for performance monitoring and optimization. Flexible and user-friendly, Yetoo integrates with
                        existing systems. Try it now for data-driven decisions.
                    </h1>
                    <Link to="/yetoo" className="learn-more-button-2">En savoir plus</Link>
                </div>
            </div>

            <div className="video-container" id="powerbi">
                <video
                    ref={powerbiVideoRef}
                    className="background-video"
                    muted
                    playsInline
                >
                    <source src={powerbiVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="overlay-text">
                    <h1>
                        Power BI helps visualize and share insights from large datasets with interactive dashboards and
                        reports. Seamlessly integrates with Microsoft tools for comprehensive data analysis and
                        decision-making.
                    </h1>
                    <Link to="/powerbi" className="learn-more-button-1">En savoir plus</Link>
                </div>
            </div>
            <div className="video-container">
                <video
                    ref={mbcVideoRef}
                    className="background-video"
                    muted
                    playsInline
                >
                    <source src={mbcVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="overlay-text-2">
                    <h1>
                        Business Central offers ERP solutions with tools like Microsoft Flow and PowerApps. It
                        centralizes goods, customers, sales, and financials, driving digital transformation.
                    </h1>
                    <Link to="/mbc" className="learn-more-button-2">En savoir plus</Link>
                </div>
            </div>

            <br/><br/> <br/>
            <br/><br/>
            <h2 className="supportYou" id="services">We support you</h2>
            <br/> <br/> <br/>
            <div className="support-section">
                <div className="support-item">
                    <p>by providing highly qualified advices</p>
                    <br/>
                    <img src={icon1} alt="Icone 1"/>
                </div>
                <div className="support-item">
                    <p>carry out your project</p>
                    <br/>
                    <img src={icon2} alt="Icone 2"/>
                </div>
                <div className="support-item">
                    <p>optimize your plans</p>
                    <br/>
                    <img src={icon3} alt="Icone 3"/>
                </div>
            </div>
            <br/><br/> <br/><br/> <br/><br/>

            <br/><br/> <br/><br/><br/>
            <span className="trust-text-span">Top company trust us<br/><br/></span>
            <img className="trustCompany-image" src={trustCompany} alt={"trusted Companies"}></img>
            <br/><br/> <br/><br/><br/>
        </div>
    );

}

export default Home;