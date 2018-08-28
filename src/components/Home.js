import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowCircleRight)
class Home extends Component {
    render(){
        return(
            <section className="site-home first">
                <div className="site-home__hero-container">
                     <div className="site-home__hero">
                        <div className="site-home__hero--logo">
                             <div className="site-home__content">
                                <span className="site-home__content--item">Front-end Development</span>
                                <span className="site-home__content--item">Responsive Web Design</span>
                                <p><Link to={`/portfolio`}><span className="site-home__icon"><FontAwesomeIcon icon="arrow-circle-right" /></span>View Portfolio</Link></p>
                             </div>
                        </div>
                     </div>
                </div>
                <div className="site-home__hero-container">
                    <div className="site-home__hero-container--left">
                      <h2>ARTEM FILINOV DEV</h2>
                    </div>
                    <div className="site-home__hero-container--right">
                        <p>I am a freelance front-end developer currently based in Wrocław, Poland.
                        I specialize in responsive web design and development.
                        My belief is that we can make internet better together by collaborating and creating
                        beautiful and functional websites.</p>
                        <p><a><span className="site-home__icon"><FontAwesomeIcon icon="arrow-circle-right" /></span>About me</a></p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;