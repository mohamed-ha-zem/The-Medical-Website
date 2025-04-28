import './App.css';
import NavBar from './Medical-Website/navBar.js';
import Home from "./Medical-Website/home.js";
import About from "./Medical-Website/about-us.js";
import Working from "./Medical-Website/working.js";
import Appoinment from "./Medical-Website/appointment.js";
import Services from './Medical-Website/services.js';
import Testimonial from './Medical-Website/testimonial.js';
import Latest from './Medical-Website/latest.js';
import Footer from './Medical-Website/footer.js';
import LoginRegister from './Medical-Website/login-register.js';
import Questions from './Medical-Website/questiones.js';

// DepartMents
import Cardiology from './Medical-Website/cardiology.js';
import Neurology from "./Medical-Website/neurology.js"
import Orthopedics from "./Medical-Website/orthopedics.js"
import Pediatrics from "./Medical-Website/pediatrics.js"
import Radiology from "./Medical-Website/radiology.js"
import Ophthalmology from "./Medical-Website/ophthalmology.js"
import ENT from "./Medical-Website/ENT.js"



import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Working />
              <Appoinment />
              <Services />
              <Testimonial />
              <Latest />
            </>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<LoginRegister />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/working' element={<Working/>}/>
        <Route path='/appointment' element={<Appoinment/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/testimonial' element={<Testimonial/>}/>
        <Route path='/latest' element={<Latest/>}/>
        <Route path='/questions' element={<Questions/>}/>
        <Route path='/login-register' element={<LoginRegister/>}/>

        <Route path='/Cardiology' element={<Cardiology/>}/>
        <Route path='/Neurology' element={<Neurology/>}/>
        <Route path='/Orthopedics' element={<Orthopedics/>}/>
        <Route path='/Pediatrics' element={<Pediatrics/>}/>
        <Route path='/Radiology' element={<Radiology/>}/>
        <Route path='/Ophthalmology' element={<Ophthalmology/>}/>
        <Route path='/ENT' element={<ENT/>}/>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;




