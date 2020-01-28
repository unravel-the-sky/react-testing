import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Joke from './components/jokes/Joke';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar></Navbar>
        <section className='hero'>
          <div className='hero-body'>
            <div className='container'>
              <Route path='/' exact component={Joke} />
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
