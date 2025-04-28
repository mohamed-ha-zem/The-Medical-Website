import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faM, faMoon } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function NavBar(){

    const { t, i18n } = useTranslation(); // الخاص بالمكتبه وبيسمح ان نتحكم في الترجمه و اللغه اللي شغاله حاليا hook ده هو ال
    const [theme , setTheme] = useState("default")
    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en'; // دي اللغة الحالية 
        i18n.changeLanguage(newLang);
    };
    function changeRoot() {
        const root = document.documentElement // مهم 

        if(theme === "default"){
            root.style.setProperty("--main-color" , "rgb(3, 3 ,3)")
            root.style.setProperty("--main-bg" , "white")
            root.style.setProperty("--btn-color" , "#2196F3")
            setTheme("custom")
        }else{
            root.style.setProperty("--main-color" , "white")
            root.style.setProperty("--main-bg" , "rgb(3, 3, 3)")
            root.style.setProperty("--btn-color" , "rgb(218, 0, 0)")
            setTheme("default")
        }
    }

    return (
        <div>
            <Navbar expand="lg">
                <Link to="/" style={{fontSize: "30px"}}>MediTro</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Pages" id="basic-nav-dropdown">
                            <Link to="/home">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/working">Working</Link>
                            <Link to="/appointment">appointment</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/testimonial">Testimonial</Link>
                            <Link to="/latest">Latest</Link>
                        </NavDropdown>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <Link to="/questions">Questions</Link>
                            <Link to="/login-register">Login/Register</Link>
                            <Link to="/appointment">Booking an appointment</Link>
                        </NavDropdown>
                        <NavDropdown title="DepartMents" id="basic-nav-dropdown">
                            <Link to="/Cardiology">Cardiology</Link>
                            <Link to="/Neurology">Neurology</Link>
                            <Link to="/Orthopedics">Orthopedics</Link>
                            <Link to="/Pediatrics">Pediatrics</Link>
                            <Link to="/Radiology">Radiology</Link>
                            <Link to="/Ophthalmology">Ophthalmology</Link>
                            <Link to="/ENT">ENT</Link>
                        </NavDropdown>
                        <Nav.Link href="#Search">Search</Nav.Link>
                        <Nav.Link className="phone" href="#phone">phone (+01) 999 888 777</Nav.Link>
                        <FontAwesomeIcon icon={faMoon} className="moon" onClick={changeRoot}/>
                        <button onClick={toggleLanguage} className="lang">
                            {i18n.language === 'en' ? 'العربية' : 'English'}
                        </button>
                    </Nav>
                    <div>
                        <Link  to="/Contact" className="Contact-But">Contact Us<span > &gt;</span></Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}