import React, { useEffect } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './Footer.css';

function Footer() {
    useEffect(() => {
        // Initialisation d'EmailJS avec votre ID utilisateur
        emailjs.init("Unj8iqUiNvHBW8Iij");  // Remplacez par votre propre ID utilisateur EmailJS
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoi du formulaire via EmailJS
        emailjs.sendForm('service_i787qvm', 'template_oqajaqs', e.target)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                // Réinitialisation du formulaire après succès
                e.target.reset();
            }, (error) => {
                console.log('FAILED...', error);
            });
    };

    return (
        <div className="Footer">
            <footer className="App-footer">
                <div className="footer-1">
                    <div className="logo-footer"></div>
                    <div className="footer-part2">
                        <br /><br /><br /><br />
                        {/* Formulaire de contact */}
                        <form className="footer-contact-form" onSubmit={handleSubmit}>
                            <h2>Développons ensemble votre société !</h2>
                            <p>Recevez nos conseils gratuit et sans engagement</p>
                            
                            <div className="form-row">
                                <input type="text" name="first_name" placeholder="Prénom*" required />
                                <input type="text" name="last_name" placeholder="Nom*" required />
                            </div>
                            <div className="form-row">
                                <input type="email" name="email" placeholder="Adresse mail*" required />
                                <input type="tel" name="phone" placeholder="Téléphone*" required />
                            </div>
                            <div className="form-row">
                                <textarea name="message" placeholder="Expliquez-nous votre projet*" required></textarea>
                            </div>
                            <div className="checkbox-row">
                                <input type="checkbox" required />
                                <label>J’ai pris connaissance de la <a href="/politique-de-vie-prive" target="_blank" rel="noopener noreferrer">politique de vie privée</a> de Tafili Consulting*</label>
                            </div>
                            <button className="submit-button" type="submit">Envoyez-moi une offre</button>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
