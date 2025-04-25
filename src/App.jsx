import './App.css'
import React from "react";
import Header from './components/Header'
import Main from './components/Main';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="parent">
      <Header />
      <Main />
      <Content />
      <Footer />
    </div>
  )
}

export default App
