import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import LandingPage from './pages/comingSoon/LandingPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <LandingPage/>} />  
          <Route path='/comingsoon' element={ <LandingPage />} />
          <Route path='/about' element={ <About />} />
          <Route path='/blog' element={ <Blog/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;

