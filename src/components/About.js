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
                    Few years ago, I started experimenting with HTML and CSS. I became very fond of coding and minimalistic designs. Since then I am trying to become better at what I do.

                    I am a relentless learner. What I love most about front-end development is the constant changes in the field especially it's evolution in the last couple of years.
                    </p>
                    <p>
                    I love working and collaborating with people. 
                    For me it does not matter whether the client wants me to create a site based on content management system, such as
                    WordPress or completely from scratch. I always do my best to match and exceed expectations and appreciate 
                    when people tell the truth.
                    </p>
                    <p>
                        I have a degree in teaching English language as a second language and on the way of receiving master's
                        degree in logistics. I came a long way before I understood what I like to do. This is why I value every
                        bit of knowledge and experience I get. Below is the list of things I learned for the last year.
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
                        <h3>Frameworks &amp; Libraries</h3>
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
                                <li>Gulp / npm scripts</li>
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
                        <h3>Practices &amp; Methodologies</h3>
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