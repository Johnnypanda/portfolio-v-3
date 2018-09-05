import React, { Component } from 'react';
import ContactForm from './ContactForm';
class Contact extends Component {
    render(){
        return(
            <section className="first site-contact">
                <div className="section-content site-contact__content">
                    <h2>Contact</h2>
                    <p className="section-content--grey">If you are interested in collaborating, want to hire me or just to have a chat, feel free to contact
                    me. I don't bite. <span role="img" aria-label="winky emoji">😉</span></p>
                   
                </div>
                    <div className="site-contact__info">
                        <ContactForm />
                    </div>
            </section>
        )
    }
}

export default Contact;