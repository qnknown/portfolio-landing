import './App.css';
import React from "react";
import WelcomePage from './components/Welcome';
import SkillsPage from './components/Skills';
import ScrollingText from './components/ScrollingText';
import AboutPage from './components/About';
import Interested from './components/Interested';
import Footer from './components/Footer';
import Background from './components/animations/Background';

function App() {
  return (
    <div className="parent" style={{ position: 'relative' }}>
      <Background />
      <WelcomePage />
      <SkillsPage />
      <ScrollingText />
      <AboutPage />
      <Interested />
      <Footer />
    </div>
  );
}

export default App;
