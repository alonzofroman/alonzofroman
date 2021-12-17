import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/about';

function App() {
  return (
     <Router>
       <Navbar />
       <Routes>
         <Route path='/about'> component={About} </Route>
       </Routes>
     </Router> 
  );
}

export default App;
