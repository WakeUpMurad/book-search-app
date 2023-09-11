import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" exact component={HomePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/about" component={AboutPage} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
