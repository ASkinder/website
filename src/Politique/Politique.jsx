import React from 'react';
import './Politique.css';

function Politique() {
    return (
        <div className="Politique-container">
            <h1 className="Politique-title">Politique de vie privée</h1>
            <p className="Politique-text">
                Tafili Consulting renforce vos droits liés à la protection de la vie privée et à la protection de vos données personnelles.
            </p>
            <p className="Politique-text">
                Ces mesures de protection s'inscrivent dans le cadre de notre engagement continu à faire preuve de transparence quant à la manière dont nous utilisons et protégeons vos données personnelles. Ces changements permettent également de prendre en compte les nouvelles normes introduites par le règlement Général sur la Protection des Données (RGPD).
            </p>
            
            <h2 className="Politique-subtitle">Responsabilité du traitement des données</h2>
            <p className="Politique-text">
                Tafili Consulting est responsable du traitement de vos données personnelles. En acceptant nos conditions générales, vous indiquez avoir lu et accepté la politique de vie privée de Tafili Consulting résumée de la manière qui suit.
            </p>
            <p className="Politique-text">
                Pour toute question concernant le traitement de vos données personnelles, vous pouvez nous contacter via l'adresse <a href="mailto:info@tafiliconsulting.com" className="Politique-link">info@tafiliconsulting.com</a> ou par téléphone au +32 (0)4 277 18 35.
            </p>

            <h2 className="Politique-subtitle">Utilisation des données personnelles</h2>
            <p className="Politique-text">
                Tafili Consulting pourra traiter les données personnelles pour assurer les objectifs de gestion et de traitement des dossiers de ses clients tant passés que présents ou futurs, ce qui implique notamment des échanges avec d'autres prestataires.
            </p>
            <p className="Politique-text">
                Votre consentement peut être révoqué à tout moment sur simple demande écrite ou par mail. Dans ce cas, la révocation ne vaudra que pour les prestations non encore accomplies.
            </p>

            <h2 className="Politique-subtitle">Partage des données</h2>
            <p className="Politique-text">
                Vos données personnelles sont traitées par nous et peuvent être notamment partagées avec les prestataires suivants pour une bonne gestion de votre dossier : graphistes, développeurs, experts en référencement naturel et payant.
            </p>

            <h2 className="Politique-subtitle">Durée de conservation des données</h2>
            <p className="Politique-text">
                Vos données personnelles ne sont pas conservées plus longtemps que nécessaire pour l'accomplissement des objectifs précités, mais également pour le respect des obligations légales, contractuelles et déontologiques qui s'imposent.
            </p>

            <h2 className="Politique-subtitle">Vos droits</h2>
            <p className="Politique-text">
                Vous pouvez accéder à vos données personnelles ou en demander la correction ou la suppression via l'adresse mail <a href="mailto:info@tafiliconsulting.com" className="Politique-link">info@tafiliconsulting.com</a> ou via courrier à l'adresse postale suivante : Tafili Consulting, Rue Ann-Sophie Charlier 21, 4650 Herve.
            </p>
            <p className="Politique-text">
                Vous pouvez également contacter l'Autorité de protection des données pour exercer ces droits à l'adresse suivante : Autorité de protection des données, 1000 Bruxelles, Rue de la Presse 35.
            </p>

            <h2 className="Politique-subtitle">Contact</h2>
            <p className="Politique-text">
                Si vous désirez de plus amples informations, vous pouvez contacter l'Autorité de protection des données à l'adresse suivante : Autorité de protection des données, 1000 Bruxelles, Rue de la Presse 35.
            </p>
        </div>
    );
}

export default Politique;
