import React, { Component } from 'react';

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

    render(){
        return(
            <header className="site-header">
                    <nav className="site-header__nav" id="main-nav">
                        <div className= { this.state.condition ? "site-header__right" : "site-header__right right-toggled" }>
                            <ul>
                                <li><a href="">Portfolio</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Contact</a></li>
                                <li className=""><a className="" href=""><span className="">Blog</span></a></li>
                            </ul>
                        </div>
                    </nav>
                
                    <div className={ this.state.condition ? "site-header__left" : "site-header__left left-toggled" }>
                    <div className="site-header__text-area">
                        <h1 className="site-header__site-name"><a href="">FILINOV</a></h1>
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
        )
    }
}

export default Header;