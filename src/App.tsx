import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Skills from './Components/Skills';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Intro/>
        <About/>
        <div>
          <h1 className='name'><span className='firstname'>salil</span>     <span className='lastname'>rajkarnikar</span> </h1>
          <Work/>
          <Skills/>
          <Contact/>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
