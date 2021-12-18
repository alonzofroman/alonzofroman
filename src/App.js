import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/about';

function App() {
  return (
     <Router>
       <Navbar />
       <Routes>
         <Route path="/about" component={About} />
       </Routes>
     </Router> 
  );
}

export default App;
