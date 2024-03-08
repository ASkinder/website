import React from 'react';
import './Finance.css';
import data_analyst from "../Img/data_analyst.png"
import bc_illu from "../Img/business_controller_illu.png"
import bc_illu2 from "../Img/bc_illu2.png"

function Finance() {
    return (
        <div className="Finance">
            <div className="Finance1">
                <br/> <br/> <br/> <br/>
                <div className="image_finance">
                    <br/><br/><br/><br/>
                    <div className="financial_title">FINANCIAL ANALYST</div>
                    <br/><br/><br/>
                    <div className="financial_text">How can your Finance function boost sales,
                        control costs, reduce risk and improve
                        sustainability? With the help of financial management software.
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <h2 className="data_title">Data analyst</h2>
                <br/><br/><br/><br/><br/><br/>
                <div className="data_analyst">
                    <img src={data_analyst} className="data_image" alt="data analyst illustration"/>
                    <div className="data_textes">
                        <span className="data_text">
                            Data Analysts interpret complex data sets to provide actionable insights, aiding
                            organizations in decision-making. They collect, process, and analyze data using statistical
                            methods and programming languages like Python or R to uncover trends and patterns that
                            drive business strategies.
                        </span>
                        <br/><br/><br/>
                        <span className="data_text">
                            Data Analysts gather data from various sources, ensuring its quality and integrity.
                            They clean and preprocess data, apply statistical analysis and data visualization
                            techniques, and communicate insights effectively through reports and presentations.
                        </span>
                        <br/><br/><br/>
                        <span className="data_text">
                            Data Analysts drive data-informed decision-making processes by providing valuable insights
                            that guide strategic planning and operational improvements. They empower businesses to make
                            evidence-based decisions, monitor key performance indicators, and ensure agility in dynamic
                            market environments.
                        </span>
                    </div>
                </div>
            </div>
            <br/><br/> <br/><br/><br/><br/><br/><br/>
            <div className="many_more_div">
                <span className="many_more">So many more</span>
                <span className="many_more_text">
                    Active collaboration with both the internal and external partners of your firm
                    can help in the agile development of software products that are creative and flexible.
                </span>
            </div>
            <br/><br/> <br/><br/><br/><br/> <br/><br/><br/><br/>
            <div className="business_controler">
                <div className="business_controler_part1">
                    <span className="business_controler_title">Business controler</span>
                    <br/><br/><br/><br/>
                    <div className="business_controler_text">
                        Consolidating all of your data, including digital documents stored in
                        Team Folders, provides your team with a comprehensive overview of all your projects in one
                        centralized location.
                    </div>
                </div>
                <img src={bc_illu} className="bc_illu" alt="business Central illustration"/>
            </div>
            <div className="business_controler2">

                <img src={bc_illu2} className="bc_illu" alt="business Central illustration 2"/>
                <div className="business_controler_part1">
                    <span className="business_controler_title1">Chief Financial Officer</span>
                    <br/><br/><br/><br/>
                    <div className="business_controler_text1">
                      If you're crowdsourcing a new product, service, or process and need to share confidential files
                        or folders with external groups, ensure full control and security over your data by using password-protected access links in Deupload.
                    </div>
                </div>
            </div>
            <br/><br/> <br/><br/><br/><br/> <br/><br/><br/><br/>
        </div>
    );
}

export default Finance;
