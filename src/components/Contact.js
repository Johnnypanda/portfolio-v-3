import React, { Component } from 'react';

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
                        <h3>Send me a message</h3>
                        <a href="mailto:afilinov93@gmail.com">afilinov93@gmail.com</a>

                    </div>
            </section>
        )
    }
}

export default Contact;