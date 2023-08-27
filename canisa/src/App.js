import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Acasa from './Pages/Acasa';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route index element={<><Acasa/></>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
