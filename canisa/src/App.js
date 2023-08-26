import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar/>
    </div>
    </Router>
  );
}

export default App;
