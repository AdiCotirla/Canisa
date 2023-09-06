import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import NavbarPhone from "./Components/NavbarPhone/NavbarPhone"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Acasa from './Pages/Acasa';
import Footer from './Components/Footer/Footer';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <NavbarPhone/>
      <Routes>
      <Route index element={<><Acasa/></>} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
