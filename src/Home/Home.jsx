import React, {useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import videoLogo from '../Img/tafili.mp4';
import office2 from '../Img/office2.png';
import icon1 from '../Img/icon1.png';
import icon2 from '../Img/icon2.png';
import icon3 from '../Img/icon3.png';
import mbc from '../Img/mbc.png';
import yetoo from '../Img/yetooHome.png';
import powerbi from '../Img/powerBI.jpg';
import trustCompany from '../Img/TrustCompany.png';
import yetooVideo from '../Img/YetooV1.mp4';
import powerbiVideo from '../Img/PowerBI.mp4';
import './Home.css';
import {Link} from "react-router-dom";

function Home() {
    const yetooVideoRef = useRef(null);
    const powerbiVideoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            console.log('Scroll detected');
            if (yetooVideoRef.current) {
                const rect = yetooVideoRef.current.getBoundingClientRect();
                console.log(rect.top, rect.bottom, window.innerHeight);

                if (rect.top < window.innerHeight && rect.bottom > 0) { // Vérifie si la vidéo est visible
                    if (yetooVideoRef.current.paused) {
                        console.log('Playing Yetoo video');
                        yetooVideoRef.current.play();
                    }
                } else {
                    if (!yetooVideoRef.current.paused) {
                        console.log('Pausing Yetoo video');
                        yetooVideoRef.current.pause();
                    }
                }
            }

            if (powerbiVideoRef.current) {
                const rect = powerbiVideoRef.current.getBoundingClientRect();
                console.log(rect.top, rect.bottom, window.innerHeight);

                if (rect.top < window.innerHeight && rect.bottom > 0) { // Vérifie si la vidéo est visible
                    if (powerbiVideoRef.current.paused) {
                        console.log('Playing Power BI video');
                        powerbiVideoRef.current.play();
                    }
                } else {
                    if (!powerbiVideoRef.current.paused) {
                        console.log('Pausing Power BI video');
                        powerbiVideoRef.current.pause();
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Vérifie l'état des vidéos lors du premier rendu

        return () => {
            window.removeEventListener('scroll', handleScroll);
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
                    <source src={yetooVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay-text-2">
                    <h1>
                        Real-time data analysis and decision-making. Offering dashboards, financial reporting, and tools for performance monitoring and optimization. Flexible and user-friendly, Yetoo integrates with existing systems. Try it now for data-driven decisions.
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
            <hr className="horizontal-line"/>
            <br/><br/>
            <div className="content" id="sectors">
                <div className="image-container">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={mbc} alt="Image 1"/>
                    <br/><br/><br/>
                </div>
                <div className="text-container">
                    <h2 className="support-link">Microsoft Business Central : ERP Dynamics 365 Business Central</h2>
                    <div className="text-support">
                        "Business Central is an ERP solution for businesses of all sizes, offering tools like Microsoft
                        Flow, PowerApps, and apps from Microsoft AppSource. It seamlessly adapts to your needs,
                        providing the features of NAV in the Cloud. With centralized management of goods, customers,
                        sales, and financials, it kickstarts digital transformation."
                    </div>
                    <br/><br/>
                    <Link to="/mbc" className="learn-more-button">En savoir plus</Link>
                    <br/><br/><br/>
                </div>
            </div>
            <hr className="horizontal-line"/>
            <br/><br/>
            <div className="content">
                <div className="image-container">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={office2} alt="Image 2"/>
                    <br/><br/><br/>
                </div>
                <div className="text-container">
                    <h2 className="support-link">Financial & IT Consultants</h2>
                    <div className="text-support">"Financial analysis involves interpreting financial data to evaluate a
                        company's performance and make informed decisions. This includes assessing financial statements,
                        ratios,
                        and metrics to gauge profitability, liquidity, and overall financial health."
                    </div>
                    <br/><br/>
                    <Link to="/financial" className="learn-more-button">En savoir plus</Link>
                    <br/><br/><br/>
                </div>
            </div>
            <hr className="horizontal-line"/>
            <br/><br/>
            <div className="content">
                <div className="image-container">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={yetoo} alt="Image 3"/>
                    <br/><br/><br/>
                </div>
                <div className="text-container">
                    <h2 className="support-link">Yetoo</h2><br/><br/>
                    <div className="text-support">"Yetoo is a web app for real-time data analysis and decision-making.
                        It
                        offers
                        dashboards, financial reporting, and tools for performance monitoring and optimization. Flexible
                        and
                        user-friendly, Yetoo integrates with existing systems. Try it now for data-driven decisions."
                    </div>
                    <br/><br/>
                    <Link to="/yetoo" className="learn-more-button">En savoir plus</Link>
                    <br/><br/><br/>
                </div>
            </div>
            <hr className="horizontal-line"/>
            <br/><br/>
            <div className="content">
                <div className="image-container">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={powerbi} alt="Image 2"/>
                    <br/><br/><br/>
                </div>
                <div className="text-container">
                    <h2 className="support-link">Power BI</h2>
                    <div className="text-support">"Power BI is a data analytics application developed by Microsoft,
                        designed to help users visualize and share insights from large datasets. This intuitive platform
                        allows the creation of interactive dashboards, customized reports, and real-time data
                        exploration. With its seamless integration with various Microsoft tools and services, Power BI
                        facilitates informed decision-making in businesses by turning raw data into actionable insights.
                        Whether for financial analysis, market research, or operational reporting, Power BI is a
                        powerful tool for organizations of all sizes."
                    </div>
                    <br/><br/>
                    <Link to="/powerbi" className="learn-more-button">En savoir plus</Link>
                    <br/><br/><br/>
                </div>
            </div>
            <hr className="horizontal-line"/>
            <br/><br/>


            <br/><br/><br/>


            <br/><br/> <br/><br/><br/>
            <span className="trust-text-span">Top company trust us<br/><br/></span>
            <img className="trustCompany-image" src={trustCompany} alt={"trusted Companies"}></img>
            <br/><br/> <br/><br/><br/>
        </div>
    );

}

export default Home;