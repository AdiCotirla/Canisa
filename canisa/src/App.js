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
import Trainings from './Pages/Trainings';
import Despre from './Components/Despre/Despre';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Breed from "./Pages/Breed"
function App() {
  
  return (
    <Router>
      <ScrollToTop/>
    <div className="App">
      <Navbar/>
      <NavbarPhone/>
      <Routes>
      <Route index element={<><Acasa/></>} />
      <Route path='/Antrenamente' element={<><Trainings/></>} />
      <Route path='/Despre' element={<><Despre/></>} />
      <Route path='/Monte' element={<><Breed/></>} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
