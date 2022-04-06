import React, { useEffect, useRef,useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Skills from './Components/Skills';

function App() {
  const [refreshis, setRefreshis] = useState(true);
//   React.useEffect(() => {
//    if (window.innerWidth<700 && refreshis) {
//       window.location.reload()
//       setRefreshis(false)
//    }
 
    
// },[])
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className='section-margin'>
          <Intro />
        </div>
        
        <div className='section-margin'>
          <About/>
        </div>
        <div>
          <h1 className='name'><span className='firstname'>salil</span>     <span className='lastname'>rajkarnikar</span> </h1>
          
          <div className='section-margin'>
            <Work/>
          </div>
          
          <div className='section-margin'>
            <Skills/>
          </div>
        </div>
          
        <div className='section-margin'>
          <Contact/>
        </div>
        

      </div>
    </BrowserRouter>
  );
}

export default App;
