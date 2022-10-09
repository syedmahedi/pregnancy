import './App.css';
import LoginForm from "./loginform";
import "./loginform.css";
import Carousel from './carousel';
import Doctors from './components/doctors';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Awareness from './components/awareness';
import MothersHealth from './components/mothersHealth';
import ChildHealth from './components/childHealth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { Footer } from './components/footer';
import {useState} from 'react';


function App() {


  return (
    <>

    <Router>


    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
    
  <div className="container-fluid">
    <a className="navbar-brand" href='/'>
      <img src="https://scontent.fdac27-2.fna.fbcdn.net/v/t1.6435-9/179336917_1428523640831204_932934920287558860_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=MT91nQIZvDEAX8Zv2PB&_nc_ht=scontent.fdac27-2.fna&oh=00_AT_RWn1iMnwOB0NpajtA8XmonPhqt4UgCFA9wNNnuvEPuw&oe=6363B6A4" style={{width: 30, height: 30, borderRadius: 30/2,marginRight: '10px',}}  class="d-inline-block align-top" alt=""/>
      <b>প্যারেন্টিং পার্টনার</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/সচেতনতা" className="nav-link">সচেতনতা</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/ডক্টরস" className="nav-link">ডক্টরস</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          স্বাস্থ্য
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink to="/মায়ের স্বাস্থ্য" className="dropdown-item">মায়ের স্বাস্থ্য</NavLink>
            <NavLink to="/সন্তানের স্বাস্থ্য" className="dropdown-item">সন্তানের স্বাস্থ্য</NavLink>
          </ul>
        </li>
        <li className="ma-1">
          <div className="singleCol social-media-icons-white">
				        <a className="m-3" href="https://www.facebook.com/mahedi.emon.9/">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.linkedin.com/in/syed-mahedi-hasen-aa07201b7/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className="m-3" href="https://www.whatsapp.com/01751110659">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="https://www.instagram.com/syedmahedihasen/">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>			
			    </div>
        </li>
      </ul>
      
      <div className="navbar-nav">
        <button type="button" className="btn btn-secondary btn-sm">
        <NavLink to="/login" className="nav-link" style={{color:"white"}}>লগ ইন</NavLink>
        </button>
      </div>
      
       
    </div>
  </div>
</nav>

<Routes>      
      <Route exact path="/" element={<Carousel/>}/>            
      <Route exact path="/ডক্টরস" element={<Doctors/>} />
      <Route exact path="/সচেতনতা" element={<Awareness/>} /> 
      <Route exact path='/মায়ের স্বাস্থ্য' element={<MothersHealth/>}/>  
      <Route exact path='/সন্তানের স্বাস্থ্য' element={<ChildHealth/>}/>    
      <Route exact path="/login" element={<LoginForm/>}/>
</Routes>


</Router>

    <div>
      <Footer/>
    </div>

  

    </>
  );
  
}

export default App;
