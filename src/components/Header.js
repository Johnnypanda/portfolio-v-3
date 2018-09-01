import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          condition: false
        }
      }
    
      handleClick = (e) => {
          e.preventDefault();
          this.setState({
              condition: !this.state.condition
          })
      }

      linkClick = (e) => {
          e.preventDefault();
          this.setState({
              condition: false
          })
      }

    render(){
        return(
            <div className="wrapper">
                <header className={ this.state.condition ? "site-header" : "site-header visible" }>
                        <nav className="site-header__nav" id="main-nav">
                            <div className="site-header__right">
                                <ul>
                                    <li onClick={ this.linkClick }><Link to={`/portfolio`}>Portfolio</Link></li>
                                    <li onClick={ this.linkClick }><Link to={`/about`}>About</Link></li>
                                    <li onClick={ this.linkClick }><Link to={`/contact`}>Contact</Link></li>
                                    <li className=""><a className="" href=""><span className="">Blog</span></a></li>
                                </ul>
                            </div>
                        </nav>
                    
                        <div className="site-header__left">
                        <div className="site-header__text-area">
                            <h1  onClick={ this.linkClick } className="site-header__site-name"><Link to={`/`}>FILINOV</Link></h1>
                            <p className="site-header__description">Front-end developer</p>
                        </div>    
                            <div onClick={ this.handleClick }
                                className= { this.state.condition ? "hamburger opened" : "hamburger" }>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div> 
                </header>
                <div onClick={ this.handleClick } className= { this.state.condition ? "overlay overlay__visible" : "overlay" }></div>
             </div>
        )
    }
}

export default Header;