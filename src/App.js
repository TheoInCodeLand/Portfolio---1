import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, About, Skills, Expirience, Projects, Work, Contact } from './pages'
import { Navbar, Project } from './components';


function App() {
 return (
    <div className="App">
      <div className='header_'>
        <Navbar />
        <Header />
      </div>
      
      <About />
      
      <Skills />
      <Expirience />
      <Projects />
      <Work />
      <Contact />
    </div>
 );
}

export default App;