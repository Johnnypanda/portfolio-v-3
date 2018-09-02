import React, { Component } from 'react';

class About extends Component {
    render(){
        return(
            <section className="first">
                <div className="section-content section-content__wrapper">
                  <h2>About</h2>
                  <p className="section-content__lead">
                    I am a freelance front-end developer currently based in Wrocław, Poland.
                    I specialize in responsive web design and development.
                    My belief is that we can make internet better together by collaborating and creating
                    beautiful and functional websites.
                  </p>
                  <div className="section-content__columns">
                    <p>
                    From the largest of buildings to the smallest of logos, we traverse different design disciplines with one united vision: to tell stories through our designs in a beautiful, fun and innovative way. These stories are what makes our designs charasmatic, engaging, unexpected and ultimately, sincere. All of our projects are imbued with a concept that stems from a period of intense research to ensure that your project is not only beautiful and functional but most importantly, meaningful. We believe that there has to be more to design than just an endless rearrangement of lines, objects and colours.
                    We are inspired by people, emotion and life experiences; from the burning neon euphoria of being in the city for the first time to briny, windswept holidays by the seaside. Our design solutions are sometimes a little left-of-centre, often drawing from design sensibilities from the past and splicing them with cutting edge technology, giving all our projects a highly bespoke personality that not only fulfils the brief, but exceeds it.
                    </p>
                    <p>
                    We love working with all types of clients, from start-ups businesses to global brands, and in the short time since our establishment, we have worked with American Express, Virgin, De Beers, Kiplinger’s Personal Finance magazine and Imogen Heap. Above everything else, we believe that all design, from its inception to the final product should have an element of joy about it – for both you and for us. After all, design is an escape from the futility of modern life, not an endorsement of it.
                    </p>
                  </div>
                  <div className="section-content section-content__skills">

                        <div className="section-content__skills__item">
                            <h3>Languages</h3>
                            <ul>
                                <li>JavaScript ES5, ES6</li>
                                <li>PHP (Basics)</li>
                                <li>HTML5</li>
                                <li>CSS3 / SCSS / SASS</li>
                            </ul>
                        </div>
                        <div className="section-content__skills__item">
                        <h3>Libraries and frameworks</h3>
                        <ul>
                            <li>React JS</li>
                            <li>Bootstrap</li>
                            <li>jQuery</li>
                        </ul>
                        </div>
                        <div className="section-content__skills__item">
                        <h3>Tools</h3>
                            <ul>
                                <li>Git</li>
                                <li>Gulp / Grunt / Npm scripts</li>
                                <li>Webpack</li>
                                <li>Babel</li>
                            </ul>
                        </div>
                        <div className="section-content__skills__item">
                        <h3>CMS</h3>
                            <ul>
                                <li>WordPress</li>
                                <li>Shopify</li>
                                <li>Tilda</li>
                            </ul>
                        </div>
                        <div className="section-content__skills__item">
                        <h3>Best practices and methodologies</h3>
                            <ul>
                                <li>KISS</li>
                                <li>DRY</li>
                                <li>BEM</li>
                                <li>Mobile first</li>
                            </ul>
                        </div>
                  </div>
                </div>
            </section>
        )
    }
}

export default About;