import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <div className="Contact">
      <div class="contactPart1">
        <span class="touch">Get in touch.</span>
        <span class="contact_text">Our team would be love to hear from you!</span>
      </div>
      <div class="contact_cadre">
        <span  class="contact_name">Your name</span>
        <input class="name_input"></input>
        <br/>
        <span  class="contact_email">Email address</span>
        <input class="email_input>"></input>
        <br/>
        <span  class="contact_company">Company (optionnal)</span>
        <input class="company_input>"></input>
        <br/>
        <span  class="contact_phone">Phone number (optionnal)</span>
        <input class="phone_input>"></input>
        <br/>
        <span  class="contact_subject">Subject</span>
        <input class="subject_input>"></input>
        <br/>
        <span  class="contact_message">Message</span>
        <input class="message_input>"></input>
        
      </div>
      <p>
        Contact
      </p>

    </div>
  );
}

export default Contact;
