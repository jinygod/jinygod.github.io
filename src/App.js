import React from 'react';
import Header from './components/header/Header';
import MainSection from './components/mainSection/MainSection';
import Project from './components/projectSection/ProjectSection';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <MainSection />
      <Project className="project" />
    </div>
  );
}

export default App;
