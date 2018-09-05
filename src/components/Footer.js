import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Font awesome packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faInstagram, faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';

//Add icons
library.add(fab, faFacebook, faInstagram, faGithub, faLinkedin )

class Footer extends Component {
    render(){
        return (
            <footer className="site-footer">
                <div className="site-footer__nav-container">
                    <nav className="site-footer__link-nav">
                        <ul>
                            <li><Link to={`/portfolio`}>Portfolio</Link></li>
                            <li><Link to={`/about`}>About</Link></li>
                            <li><Link to={`/contact`}>Contact</Link></li>
                            <li><a href="https://blog.artemfilinov.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                        </ul>
                    </nav>

                    <nav className="site-footer__social-nav">
                        <ul>
                            <li><a href="https://www.facebook.com/filinovartem" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                            <li><a href="https://www.instagram.com/artemfilinov/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                            <li><a href="https://github.com/Johnnypanda" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                            <li><a href="https://www.linkedin.com/in/artemfilinov/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                        </ul>
                    </nav>
                </div>
                <div className="site-footer__copyright">
                    Made by me &copy; <a>Artem Filinov</a> 2018
                </div>
            </footer>
        )
    }
}

export default Footer;