import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
     <Router>
       <Navbar />
       <Routes>
         <Route path="/about" component={About} />
         <Route path='/contact' component={Contact} />
         
       </Routes>
     </Router> 
  );
}

export default App;
