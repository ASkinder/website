import React from 'react';
import './Contact.css'

function Contact() {
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
            <div className="v61_598"><span className="v61_599">Send</span></div>
            <br/> <br/> <br/>
        </div>
        <div className="contactPart2">
            <br/>
        </div>
    </div>
  );
}

export default Contact;
