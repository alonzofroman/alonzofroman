import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Footer from './components/footer';
import Home from './components/home';

function App() {
  return (
     <Router>
       <Navbar />
       <Routes>
         <Route path="/about" element={<About />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/projects' element={<Projects />} />
         <Route path='/' element={<Home />} />
       </Routes>
       <Footer />
     </Router> 
  );
}

export default App;
