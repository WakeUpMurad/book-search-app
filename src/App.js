import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import cl from './App.module.css';
import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Router>
      <div className={cl.app}>
        <Navigation />
        <main className={cl.page}>
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/about" element={<AboutPage/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
