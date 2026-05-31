import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Scroll from './components/Scroll';
import './themes.css';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light-theme'); // Default to Light theme

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === 'light-theme' ? 'dark-oceanic-theme' : 'light-theme'
    );
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Scroll />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
