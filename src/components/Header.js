import React, { Component } from 'react';
//Font awesome packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

//Add icons
library.add(faCoffee)

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
                        <h1 className="site-header__site-name"><a href="">A. FILINOV</a></h1>
                        <div className="site-header__description">Front-end developer</div>
                        <a href="" id="menu"
                        onClick={ this.handleClick }>Menu <FontAwesomeIcon icon="coffee" /></a>
                    </div>

             </header>
        )
    }
}

export default Header;