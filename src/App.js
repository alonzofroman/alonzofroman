import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ResponsiveAppBar from './components/navbar';

function App() {
  return (
    <div className="App">
     <ResponsiveAppBar />
    </div>
  );
}

export default App;
