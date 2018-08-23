import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: 'Travel Site Template',
          image: '/images/travel-site-lg.png',
          description: 'JavaScript, Webpack, Babel, Scss, PostCss'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Portfolio projects={this.state.projects} />
        <Footer />
        </div>
    );
  }
}

export default App;
