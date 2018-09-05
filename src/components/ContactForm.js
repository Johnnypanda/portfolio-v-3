import React, { Component } from 'react';
import axios from 'axios';
class ContactForm extends Component {
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return(
            <div className="site-contact__form">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <input type="text" name="name" id="name" placeholder="Your Name" />
                <input type="email" name="e-mail" id="email" placeholder="E-mail Adress" />
                <textarea name="text" id="message" placeholder="Your Message"></textarea>
                <button type="submit">Send a message</button>
            </form>
        </div>
        )
    }
}

export default ContactForm