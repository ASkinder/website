import React from 'react';
import './Mbc.css';
import videoMbc from '../Img/MicrosoftBusinessCentral.mp4'

function Mbc() {
    return (
        <div className="Mbc">
            <br/> <br/> <br/> <br/>
            <div className="Mbc1">
                <br/>

            <div className="video-container-mbc">
                <div className="content-wrapper">
                    <div className="rectangle-gauche">
                        <span className="mbc-title">Microsoft Business Central</span>
                        <br/>
                        <span className="mbc-intro">"Business central" typically refers to a central hub or software solution for managing various aspects of a business, often associated with Microsoft Dynamics 365 Business Central in the context of enterprise resource planning (ERP)</span>
                    </div>

                    <video className="videoMBC" controls>
                        <source src={videoMbc} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            </div>
            <div className="Mbc1">
                <div className="content-wrapper2">
                    
                    <div className="part2-title">
                        Why choose business central for your teams ?
                    </div>
                    <div className="part2-texte">
                        Implementing Business Central, such as Microsoft Dynamics 365 Business Central, can greatly benefit a company
                        by providing an integrated and centralized platform for managing key business functions. This all-in-one solution
                        streamlines processes across finance, operations, sales, and customer service. It enhances efficiency, enables real-time
                        insights through robust reporting and analytics, and supports better decision-making.
                    </div>
            
                </div>
            </div>
            <div class="info-cards">
                <div class="info-card">
                    <div class="card-icon">🔒</div>
                    <div class="card-title">Sécurité</div>
                    <div class="info-text">
                        Nous garantissons la sécurité de vos données avec des protocoles de sécurité robustes.
                    </div>
                </div>

                <div class="info-card">
                    <div class="card-icon">⏰</div>
                    <div class="card-title">Disponibilité</div>
                    <div class="info-text">
                        Nos services sont disponibles 24/7 pour répondre à vos besoins.
                    </div>
                </div>

                <div class="info-card">
                    <div class="card-icon">⏱️</div>
                    <div class="card-title">Performance</div>
                    <div class="info-text">
                        Optimisation des performances pour garantir une expérience utilisateur fluide et rapide.
                    </div>
                </div>

                <div class="info-card">
                    <div class="card-icon">🛡️</div>
                    <div class="card-title">Durabilité</div>
                    <div class="info-text">
                        Solutions durables qui résistent aux défis de l'avenir.
                    </div>
                </div>

                <div class="info-card">
                    <div class="card-icon">⚙️</div>
                    <div class="card-title">Module</div>
                    <div class="info-text">
                        Des modules personnalisables pour répondre à vos besoins spécifiques.
                    </div>
                </div>

                <div class="info-card">
                    <div class="card-icon">🤝</div>
                    <div class="card-title">Accompagnement</div>
                    <div class="info-text">
                        Un accompagnement professionnel pour assurer votre succès à long terme.
                    </div>
                </div>
            </div>


            <br/> <br/> <br/>
        </div>
    );
}

export default Mbc;
