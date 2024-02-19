import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import office1 from '../Img/office1.png';
import office2 from '../Img/office2.png';
import office3 from '../Img/office3.png';
import trustCompany from '../Img/TrustCompany.png';
import './Home.css';
import {Link} from "react-router-dom";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [office1, office2, office3];

    return (
        <div className="Home">
          <br/><br/>
          <Carousel activeIndex={currentSlide} onSelect={(index) => setCurrentSlide(index)}
                    style={{width: '68%', margin: 'auto',  zIndex: '1'}}>
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


          <div className="helping-text" id="services">
        <span>
          <span className="helping-text-span">Contributing today, shaping tomorrow<br/><br/></span>
          <span className="helping-text-span3">Our mission is to deliver the best solutions to our clients in their finance functions. We support them by providing highly-qualified and hands-on consultants to face a lack of resources, to carry out their projects and by reviewing and optimizing their processes.</span>
        </span>
          </div>
          <br/><br/>

          <div className="container">
            <div className="rectangles">
              <div className="rectangle-139">
                <br/>
                <Link to="/mbc" className="microsoft-business-central">Microsoft Business Central : ERP Dynamics 365
                  Business Central</Link>
                <br/><br/>
                <div className="business">
                  "Business Central is an ERP solution for businesses of all sizes, offering tools like Microsoft Flow,
                  PowerApps, and apps from Microsoft AppSource. It seamlessly adapts to your needs, providing the
                  features
                  of NAV in the Cloud. With centralized management of goods, customers, sales, and financials, it
                  kickstarts digital transformation."
                </div>
              </div>

              <div className="rectangle-139">
                <br/>
                <div className="financial-it-consultant">Financial & IT Consultants</div>
                <br/>
                <div className="financial">"Financial analysis involves interpreting financial data to evaluate a
                  company's performance and make informed decisions. This includes assessing financial statements,
                  ratios,
                  and metrics to gauge profitability, liquidity, and overall financial health."
                </div>
              </div>
            </div>

            <div className="rectangle-139">
              <br/>
              <div className="yetoo">Yetoo</div>
              <br/>
              <div className="yetoo-text">"Yetoo is a web app for real-time data analysis and decision-making. It offers
                dashboards, financial reporting, and tools for performance monitoring and optimization. Flexible and
                user-friendly, Yetoo integrates with existing systems. Try it now for data-driven decisions."
              </div>

            </div>
          </div>


          <br/><br/><br/>

          <div className="sector-text" id="sectors">
        <span>
          <span className="sector-text-span">Sector<br/><br/></span>
          <span className="sector-text-span3">We are capable and have already worked in several different sectors. No matter what sector your company operates in, we can offer you our help.</span>
        </span>
          </div>
          <br/><br/>

          <div className="sector-container">
            <div className="rectangle-sector">
              <div className="ellipse-sector">
                <svg
                    className="key-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_11_3606)">
                    <path
                        d="M5 5.5C5 2.4625 7.4625 0 10.5 0C13.5375 0 16 2.4625 16 5.5C16 8.5375 13.5375 11 10.5 11C9.91563 11 9.35 10.9094 8.82187 10.7406L5.25938 7.17812C5.09063 6.65 5 6.08437 5 5.5ZM11.75 3C11.0594 3 10.5 3.55938 10.5 4.25C10.5 4.94063 11.0594 5.5 11.75 5.5C12.4406 5.5 13 4.94063 13 4.25C13 3.55938 12.4406 3 11.75 3Z"
                        fill="white"
                    />
                    <path
                        opacity="0.4"
                        d="M5.25938 7.17773L8.82187 10.7402L7.75313 11.7527C7.64062 11.9215 7.45 11.9996 7.25 11.9996H6V13.2496C6 13.6652 5.66563 13.9996 5.25 13.9996H4V15.2496C4 15.6652 3.66563 15.9996 3.25 15.9996H0.75C0.335938 15.9996 0 15.6652 0 15.2496V12.7496C0 12.5496 0.0790312 12.359 0.219656 12.2184L5.25938 7.17773Z"
                        fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11_3606">
                      <rect width="16" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="industry">INDUSTRY</div>
            </div>

            <div className="rectangle-sector">
              <div className="ellipse-sector">
                <svg
                    className="user-1"
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_11_3637)">
                    <path
                        d="M8.58438 9.5H5.41563C2.42531 9.5 0 11.925 0 14.9156C0 15.5137 0.485 15.9991 1.08312 15.9991H12.9175C13.5156 16 14 15.5156 14 14.9156C14 11.925 11.575 9.5 8.58438 9.5Z"
                        fill="white"
                    />
                    <path
                        opacity="0.4"
                        d="M11 4C11 6.20906 9.20937 8 7 8C4.79063 8 3 6.20937 3 4C3 1.79063 4.79094 0 7 0C9.20937 0 11 1.79094 11 4Z"
                        fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11_3637">
                      <rect width="14" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="finance">FINANCE</div>
            </div>

            <div className="rectangle-sector">
              <div className="ellipse-sector">
                <svg
                    className="users-1"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_11_3714)">
                    <path
                        d="M7.99672 8.75C9.43197 8.75 10.5742 7.47687 10.5742 5.90625C10.5742 4.33563 9.41072 3.0625 7.99672 3.0625C6.56147 3.0625 5.41922 4.33563 5.41922 5.90625C5.39672 7.47578 6.56172 8.75 7.99672 8.75ZM9.24672 9.625H6.75172C4.78922 9.625 3.19922 11.2574 3.19922 13.2699C3.19922 13.6746 3.51672 14 3.90922 14H12.0892C12.4817 14 12.7992 13.6746 12.7992 13.2699C12.7992 11.2574 11.2092 9.625 9.24672 9.625Z"
                        fill="white"
                    />
                    <path
                        opacity="0.4"
                        d="M3.2 4.375C4.3045 4.375 5.2 3.39555 5.2 2.1875C5.2 0.979453 4.305 0 3.2 0C2.0955 0 1.2 0.979453 1.2 2.1875C1.2 3.39555 2.0955 4.375 3.2 4.375ZM12.8 4.375C13.9045 4.375 14.8 3.39555 14.8 2.1875C14.8 0.979453 13.905 0 12.8 0C11.6955 0 10.8 0.979453 10.8 2.1875C10.8 3.39555 11.695 4.375 12.8 4.375ZM13.7975 5.25H12.2515C11.9315 5.25 11.6295 5.33304 11.355 5.47531C11.37 5.61914 11.395 5.75859 11.395 5.90625C11.395 6.82801 11.0755 7.66199 10.566 8.3125H15.5585C15.8025 8.3125 16 8.08281 16 7.80117C16 6.39297 15.015 5.25 13.7975 5.25ZM4.6375 5.47148C4.365 5.30742 4.065 5.25 3.7475 5.25H2.202C0.986 5.25 0 6.39297 0 7.80117C0 8.08281 0.197175 8.3125 0.4405 8.3125H5.428C4.9185 7.66199 4.599 6.82801 4.599 5.90625C4.5975 5.75859 4.6225 5.61641 4.6375 5.47148Z"
                        fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11_3714">
                      <rect width="16" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="public-sector">PUBLIC SECTOR</div>
            </div>
          </div>
          <div className="sector-container">
            <div className="rectangle-sector">
              <div className="ellipse-sector">
                <svg
                    className="upload-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_11_3719)">
                    <path
                        d="M12.7053 5.70625C13.0956 5.31594 13.0956 4.68281 12.7053 4.29219L8.70531 0.292188C8.51156 0.0976563 8.25531 0 7.99906 0C7.74281 0 7.48719 0.0976562 7.29219 0.292969L3.29219 4.29297C2.90188 4.68328 2.90188 5.31641 3.29219 5.70703C3.68281 6.09734 4.31594 6.09766 4.70625 5.70706L6.99906 3.41563V11C6.99906 11.5522 7.44688 12 7.99906 12C8.55125 12 8.99906 11.5522 8.99906 11V3.41563L11.2928 5.70625C11.6834 6.09688 12.3147 6.09688 12.7053 5.70625Z"
                        fill="white"
                    />
                    <path
                        opacity="0.4"
                        d="M1 11H6C6 12.1047 6.89531 13 8 13C9.10469 13 10 12.1047 10 11H15C15.5522 11 16 11.4478 16 12V15C16 15.5522 15.5522 16 15 16H1C0.447812 16 0 15.5522 0 15V12C0 11.4469 0.446875 11 1 11ZM2.5 14.25C2.9125 14.25 3.25 13.9125 3.25 13.5C3.25 13.0875 2.9125 12.75 2.5 12.75C2.0875 12.75 1.75 13.0875 1.75 13.5C1.75 13.9125 2.0875 14.25 2.5 14.25Z"
                        fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11_3719">
                      <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="matrix(-1 0 0 1 16 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="transport-logistic">TRANSPORT &amp; LOGISTIC</div>
            </div>

            <div className="rectangle-sector">
              <div className="ellipse-sector">
                <svg
                    className="share-from-square-1"
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_11_3724)">
                    <path
                        d="M17.7781 5.51553L13.0625 9.83428C12.65 10.2124 12 9.87803 12 9.31866V6.97178C8 6.99991 5.83437 7.88116 7.09375 11.8874C7.23353 12.3318 6.69375 12.6762 6.31437 12.4018C5.1 11.5249 4 9.84053 4 8.14366C4 3.94053 7.5375 3.05085 12 2.99991V0.682409C12 0.0949091 12.6503 -0.211653 13.0631 0.166159L17.7787 4.48491C18.075 4.75616 18.075 5.24366 17.7781 5.51553Z"
                        fill="white"
                    />
                    <path
                        opacity="0.4"
                        d="M13 12C12.4478 12 12 12.4478 12 13V13.9719L2 13.9718V4H3C3.55219 4 4 3.5525 4 3C4 2.4475 3.55312 2 3 2H2C0.895313 2 0 2.89531 0 4V13.9719C0 15.0763 0.895313 15.9719 2 15.9719L12 15.9718C13.1047 15.9718 14 15.0762 14 13.9718V13C14 12.4469 13.5531 12 13 12Z"
                        fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11_3724">
                      <rect width="18" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="energy">ENERGY</div>
            </div>

            <div className="rectangle-sector">
              <div className="ellipse-sector">
                <svg
                    className="folder-arrow-down-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M4.96785 8.46875C5.11473 8.32188 5.30535 8.25 5.4991 8.25C5.69285 8.25 5.88285 8.32325 6.02941 8.46972L7.2491 9.69063V6.25C7.2491 5.8375 7.5866 5.5 7.9991 5.5C8.4116 5.5 8.7491 5.83594 8.7491 6.25V9.69063L9.96879 8.47094C10.2618 8.17797 10.7363 8.17797 11.0294 8.47094C11.3225 8.76391 11.3224 9.23844 11.0294 9.53156L8.52941 12.0316C8.23645 12.3245 7.76191 12.3245 7.46879 12.0316L4.96879 9.53156C4.67723 9.2375 4.67723 8.7625 4.96785 8.46875Z"
                      fill="white"
                  />
                  <path
                      opacity="0.4"
                      d="M14.5 3H8.5L6.5 1H1.5C0.671875 1 0 1.67188 0 2.5V13.5C0 14.3281 0.671875 15 1.5 15H14.5C15.3281 15 16 14.3281 16 13.5V4.5C16 3.67188 15.3281 3 14.5 3ZM4.96875 8.46875C5.11562 8.32188 5.30625 8.25 5.5 8.25C5.69375 8.25 5.88375 8.32325 6.03031 8.46972L7.25 9.69063V6.25C7.25 5.8375 7.5875 5.5 8 5.5C8.4125 5.5 8.75 5.83594 8.75 6.25V9.69063L9.96969 8.47094C10.2627 8.17797 10.7372 8.17797 11.0303 8.47094C11.3234 8.76391 11.3233 9.23844 11.0303 9.53156L8.53031 12.0316C8.23734 12.3245 7.76281 12.3245 7.46969 12.0316L4.96969 9.53156C4.67812 9.2375 4.67812 8.7625 4.96875 8.46875Z"
                      fill="white"
                  />
                </svg>
              </div>
              <div className="real-estate">REAL ESTATE</div>

            </div>

          </div>
          <br/><br/> <br/><br/><br/>
          <span className="trust-text-span">Top company trust us<br/><br/></span>
          <img className="trustCompany-image" src={trustCompany} alt={"trusted Companies"}></img>
          <br/><br/> <br/><br/><br/>
        </div>
    );

}

export default Home;