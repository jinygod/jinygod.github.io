import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Project from './components/Project';
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
