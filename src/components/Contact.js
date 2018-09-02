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
                        
                        <div className="site-contact__form">
                            <h3>Send me a message</h3>
                            <form action="">
                            <input type="text" name="name" placeholder="Your Name" />
                            <input type="email" name="e-mail" placeholder="E-mail Adress" />
                            <textarea name="text" id="" rows="8" placeholder="Your Message"></textarea>
                            <button class="btn-send">Send a message</button>
                            </form>
                        </div>
                    </div>
            </section>
        )
    }
}

export default Contact;