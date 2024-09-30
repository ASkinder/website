import React from 'react';
import './DataAnalyst.css';
import dataIllustration from '../Img/yetoo_illu2.jpg';
import itIllustration from '../Img/yetoo.jpeg';

const DataAnalystIT = () => {
    return (
        <div className="data-analyst-page">
            <header className="data-analyst-header">
                <h1>Data Analyst & IT: Transforming Data into Actionable Insights</h1>
                <p>Explore the critical role of data and technology experts in today's fast-evolving business landscape.</p>
            </header>

            <section className="data-analyst-section">
                <div className="data-analyst-text">
                    <h2>What is a Data Analyst?</h2>
                    <p>A data analyst is a professional who gathers, processes, and analyzes data to help businesses make informed decisions. They turn raw data into actionable insights by identifying trends, patterns, and anomalies. This role is crucial in helping companies optimize their processes, improve customer experiences, and drive growth.</p>
                    <p>Key responsibilities include:</p>
                    <ul>
                        <li>Collecting and cleaning data from various sources</li>
                        <li>Using statistical methods to analyze datasets</li>
                        <li>Creating visualizations such as dashboards and reports</li>
                        <li>Providing actionable insights to help drive business decisions</li>
                    </ul>
                </div>
                <div className="data-analyst-image">
                    <img src={dataIllustration} alt="Data analysis illustration" />
                </div>
            </section>

            <section className="it-section">
                <div className="it-image">
                    <img src={itIllustration} alt="IT infrastructure illustration" />
                </div>
                <div className="it-text">
                    <h2>IT in Data Analytics</h2>
                    <p>Information Technology (IT) plays a fundamental role in the data analytics ecosystem. IT professionals ensure that the data infrastructure is robust, scalable, and secure, allowing data analysts to access and manipulate data efficiently. They are responsible for managing databases, implementing ETL (Extract, Transform, Load) processes, and supporting advanced analytics tools.</p>
                    <p>In many cases, IT specialists work hand-in-hand with data analysts to build data pipelines, deploy machine learning models, and maintain data security and integrity.</p>
                </div>
            </section>

            <section className="tools-section">
                <h2>Common Tools and Technologies</h2>
                <div className="tools-grid">
                    <div className="tool-card">
                        <div className="card-icon">⚛️</div>
                        <h3>Javascript React</h3>
                        <div className="info-text-data">
                        React is a popular JavaScript library for building dynamic user interfaces. It helps developers create reusable components, manage application state efficiently, and build smooth, interactive web experiences.</div>
                        </div>
                    <div className="tool-card">
                        <div className="card-icon">💾</div>
                        <h3>SQL</h3>
                        <div className="info-text-data">
                            Structured Query Language (SQL) is essential for querying and managing data stored in relational databases.
                        </div>
                    </div>
                    <div className="tool-card">
                        <div className="card-icon">🐍</div>
                        <h3>Python</h3>
                        <div className="info-text-data">
                            Python is widely used for data analysis, offering libraries such as Pandas, NumPy, and Matplotlib for processing and visualizing data.
                        </div>
                    </div>
                    <div className="tool-card">
                        <div className="card-icon">📊</div>
                        <h3>Power BI</h3>
                        <div className="info-text-data">
                            A business analytics tool that enables users to create interactive dashboards and reports, transforming raw data into actionable insights.
                        </div>
                    </div>
                    <div className="tool-card">
                        <div className="card-icon">📈</div>
                        <h3>Tableau</h3>
                        <div className="info-text-data">
                            Another powerful tool for data visualization, widely used to create dynamic and shareable dashboards.
                        </div>
                    </div>
                    <div className="tool-card">
                        <div className="card-icon">📊</div>
                        <h3>Excel</h3>
                        <div className="info-text-data">
                            A staple in data analysis for handling small datasets, performing basic statistical analysis, and generating visualizations.
                        </div>
                    </div>
                    <div className="tool-card">
                        <div className="card-icon">🔄</div>
                        <h3>ETL Tools</h3>
                        <div className="info-text-data">
                            ETL (Extract, Transform, Load) tools like Talend or Apache Nifi are used to automate the flow of data from different sources into data warehouses.
                        </div>
                    </div>
                </div>
            </section>


            <section className="career-outlook-section">
                <h2>Career Outlook for Data Analysts and IT Professionals</h2>
                <p>With the growing importance of data in decision-making, the demand for data analysts and IT professionals is on the rise. Companies across industries rely on these experts to gain competitive advantages, optimize processes, and drive innovation.</p>
                <p>In particular, fields like healthcare, finance, retail, and manufacturing are investing heavily in data-driven solutions, making it a promising career choice for those with skills in data analysis and IT infrastructure management.</p>
            </section>

            <footer className="data-analyst-footer">
                <p>Interested in becoming a data analyst or IT specialist? Contact us for more information on available opportunities and resources.</p>
            </footer>
        </div>
    );
};

export default DataAnalystIT;
