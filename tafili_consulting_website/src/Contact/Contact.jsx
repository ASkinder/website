import React, { useState } from 'react';
import './Contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        // Envoyer les données à votre backend pour l'envoi de l'e-mail
        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    console.log('E-mail sent successfully');
                    // Réinitialiser le formulaire si nécessaire
                    setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        subject: '',
                        message: ''
                    });
                } else {
                    console.error('Failed to send e-mail');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
  return (
    <div className="Contact">
      <div className="contactPart1">
        <span className="touch">Get in touch.</span><br/>
        <span className="contact_text">Our team would be love to hear from you!</span>
      </div>
        <div className="contact_cadre">
            <br/>
            <span className="contact_name">Your name</span><br/>
            <input className="name_input"></input>
            <br/>
            <span className="contact_email">Email address</span><br/>
            <input className="email_input>"></input>
            <br/>
            <span className="contact_company">Company (optionnal)</span><br/>
            <input className="company_input>"></input>
            <br/>
            <span className="contact_phone">Phone number (optionnal)</span><br/>
            <input className="phone_input>"></input>
            <br/>
            <span className="contact_subject">Subject</span><br/>
            <input className="subject_input>"></input>
            <br/>
            <span className="contact_message">Message</span><br/>
            <input className="message_input>"></input>
            <br/> <br/>
            <div className="v61_598" onClick={handleSubmit}><span className="v61_599">Send</span></div >
            <br/> <br/> <br/>
        </div>
        <div className="contactPart2">
            <br/>
        </div>
    </div>
  );
}

export default Contact;
