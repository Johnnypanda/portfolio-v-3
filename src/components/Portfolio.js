import React, { Component } from 'react';

class Portfolio extends Component {
    render(){
        return(
            <section className="first portfolio">
            <div className="section-content">
                <h2>Portfolio</h2>
                <p>Take a look at some of my projects</p>
            </div>
            <div className="grid-container">
                {this.props.projects.map((project) => (
                    <div key={project.name} className="grid-item">
                    <article>
                        <a href={project.url} target="_blank">
                            <figure>
                                <img alt={project.name} src={project.image}/>
                                <div className="portfolio_arrow">
                                    <span></span>
                                </div>
                            </figure>
                            <h3>{project.name}</h3>
                            <div className="portfolio__description">
                                <p>{project.description}</p>
                            </div>
                        </a>
                    </article>
                </div>
                ))}
            </div>
            </section>
        )
    }
}

export default Portfolio;