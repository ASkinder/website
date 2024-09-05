import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import office1 from '../Img/office1.png';
import office2 from '../Img/office2.png';
import office3 from '../Img/office3.png';
import icon1 from '../Img/icon1.png';
import icon2 from '../Img/icon2.png';
import icon3 from '../Img/icon3.png';
import mbc from '../Img/mbc.png';
import finance from '../Img/finance.jpg';
import yetoo from '../Img/yetoo.jpeg';
import powerbi from '../Img/powerBI.jpg';
import trustCompany from '../Img/TrustCompany.png';
import './Home.css';
import {Link} from "react-router-dom";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [office1, office2, office3];

    return (
        <div className="Home">
            <br/><br/> <br/><br/>
            <h1 className="home-text1">THE SUITABLE SOLUTION FOR YOUR FINANCE FUNCTIONS</h1>
            <br/><br/> <br/><br/>
            <Carousel activeIndex={currentSlide} onSelect={(index) => setCurrentSlide(index)}
                      style={{width: '68%', margin: 'auto', zIndex: '1'}}>
                {slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                        <img className="d-block w-100" src={slide} alt={`Slide ${index + 1}`}/>
                        <Carousel.Caption>
                            <h3>Tafili Consulting</h3>
                            <p>The atmosphere in Tafili Consulting has a familial and professional ambiance.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

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
                    <img src={finance} alt="Image 2"/>
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
                    <div className="text-support">"Power BI is a data analytics application developed by Microsoft, designed to help users visualize and share insights from large datasets. This intuitive platform allows the creation of interactive dashboards, customized reports, and real-time data exploration. With its seamless integration with various Microsoft tools and services, Power BI facilitates informed decision-making in businesses by turning raw data into actionable insights. Whether for financial analysis, market research, or operational reporting, Power BI is a powerful tool for organizations of all sizes."
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