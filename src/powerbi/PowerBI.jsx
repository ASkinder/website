import React from 'react';
import './PowerBI.css';

function PowerBI() {
    return (
        <div className="powerbi-page">
            {/* First Section */}
            <section className="title-section">
                <div className="title-text">
                    <h1 className="powerbi-title">Power BI</h1>
                    <p className="powerbi-subtitle">Découvrez de puissantes fonctionnalités de gestion pour transformer
                        vos données en concret</p>
                </div>
            </section>


            <hr className="section-divider"/>

            {/* Second Section */}
            <section className="features-section-bi">
                <div className="features-overlay">
                    <div className="features-content">
                        <h2 className="features-title">Pourquoi choisir Power BI ?</h2>
                        <div className="feature-item">
                            <i className="icon-database"></i>
                            <p>Réunissez l'ensemble de vos données</p>
                        </div>
                        <div className="feature-item">
                            <i className="icon-visual"></i>
                            <p>Visualisez vos détails en quelques clics</p>
                        </div>
                        <div className="feature-item">
                            <i className="icon-forecast"></i>
                            <p>Gérez vos futurs investissements grâce aux forecasts</p>
                        </div>
                        <div className="feature-item">
                            <i className="icon-decision"></i>
                            <p>Optimisez vos processus décisionnels</p>
                        </div>
                        <div className="feature-item">
                            <i className="icon-report"></i>
                            <p>Créez des rapports dynamiques et intuitifs</p>
                        </div>
                    </div>
                </div>
            </section>


            <hr className="section-divider"/>

            {/* Third Section */}
            <section className="details-section">
                <h2 className="details-title">Découvrez ce que vous pouvez faire avec Power BI</h2>
                <div className="details-grid">
                    <div className="detail-item">
                        <h3>Établir une source de vérité régie</h3>
                        <p>Regroupez toutes vos sources de données disparates dans un même environnement pour établir
                            une source unique de vérité pour toutes vos données.</p>
                    </div>
                    <div className="detail-item">
                        <h3>Unifiez le décisionnel libre-service</h3>
                        <p>Combinez le décisionnel libre-service et à l’échelle de l’entreprise pour générer des
                            insights et favoriser l’innovation à chaque niveau de votre organisation.</p>
                    </div>
                    <div className="detail-item">
                        <h3>Intégrer des expériences de données partout</h3>
                        <p>Conciliez les insights et les décisions grâce à une interopérabilité inégalée avec les
                            applications que les utilisateurs utilisent quotidiennement.</p>
                    </div>
                    <div className="detail-item">
                        <h3>Mettre les données au service de tous</h3>
                        <p>Assurez-vous que tout le monde peut explorer les données grâce à une interface facile à
                            utiliser et des ressources de formation gratuites.</p>
                    </div>
                    <div className="detail-item">
                        <h3>Commencer rapidement</h3>
                        <p>Démarrez rapidement avec une expérience de création de rapports facile à utiliser, des
                            rapports générés par l’IA et des centaines de modèles de rapport.</p>
                    </div>
                    <div className="detail-item">
                        <h3>Incorporer des rapports décisionnels</h3>
                        <p>Améliorez la convivialité et l’engagement des utilisateurs dans vos propres applications en
                            utilisant Power BI Embedded pour intégrer de superbes rapports.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PowerBI;
