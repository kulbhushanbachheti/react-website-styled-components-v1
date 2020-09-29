import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <switch>
        <Router path ='/' exact  />
      </switch>
    </Router>
    </>
  );
}


export default App;
