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
          description: 'JavaScript, Webpack, Babel, Scss, PostCss',
          url: 'https://johnnypanda.github.io/travel-site/'
        },
        {
          name: 'Portfolio site v 2.0',
          image: '/images/portfolio-2.png',
          description: 'JavaScript, Webpack, Babel, Scss, PostCss',
          url: ''
        },
        {
          name: 'Portfolio site v 1.0',
          image: '/images/portfolio-1.png',
          description: 'HTML, CSS, Bootstrap, jQuery',
          url: 'https://johnnypanda.github.io/portfolio-v-1/'
        },
        {
          name: 'Memory Game',
          image: '/images/memory-game.png',
          description: 'HTML, CSS, JavaScript',
          url: 'https://johnnypanda.github.io/memory-game/'
        },
        {
          name: 'Classic Arcade Game: Frogger',
          image: '/images/frogger.png',
          description: 'HTML, CSS, JavaScript, OOP, Canvas',
          url: 'https://johnnypanda.github.io/js-arcade-game/'
        },
        {
          name: 'Pixel Art Maker',
          image: '/images/pixel-art.png',
          description: 'HTML, CSS, jQuery, Canvas',
          url: 'https://johnnypanda.github.io/pixel-art-maker/'
        },
        {
          name: 'Book Tracking App: MyReads',
          image: '/images/book-tracking.png',
          description: 'React, ES6, Webpack, Babel, API, JSON',
          url: ''
        },
        {
          name: 'Github Profile Viewer',
          image: '/images/github-viewer.png',
          description: 'React, ES6, Webpack, Babel, API, JSON',
          url: ''
        },
        {
          name: 'Youtube Viewer',
          image: '/images/youtube-viewer.png',
          description: 'React, ES6, Webpack, Babel, API, JSON',
          url: ''
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
