import React from 'react'
import { Carousel } from 'react-bootstrap'
import Card from './card';
import './App.css';
import { NavLink } from 'react-router-dom';
import {Routes} from 'react-router-dom';


export default function carousel() {

    return (
      <>
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: 400 }}
          src="https://images.unsplash.com/photo-1448301566816-a036b4240d58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <p><h2>We work for free newsletters tracking your baby's development</h2></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: 400 }}
          src="https://images.unsplash.com/photo-1596144241742-a54dffcc9b26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
        <p><h2>We suggest the best way to follow the rules of your pregnancy period</h2></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height: 400 }}
          onBlurCapture
          src="https://images.unsplash.com/photo-1574637428470-7ede5332d44e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
        <p><h2>We provide expert advice at your fingertips</h2></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <br></br>
    <br></br>



    <div>
      <h4 style={{textAlign: "center"}}>সপ্তাহে - সপ্তাহে - আপনার - গর্ভাবস্থা</h4>

    <ul className='navbar-list mt-4 mb-5 overflow-scrolling'>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>২য় সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>৩য় সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>৪র্থ সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>৫ম সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>৬ষ্ঠ সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>৭ম সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>৮ম সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>৯ম সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>১০ম সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>১১ সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>৯ম সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>১০ম সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>১১ সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>৯ম সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>১০ম সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>১১ সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>৯ম সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>১০ম সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>১১ সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>৯ম সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>১০ম সপ্তাহ</NavLink></li>
    <li className='mx-2'><NavLink to='/' className='user-logo' style={{textDecoration: 'none',color:'white'}}>১১ সপ্তাহ</NavLink></li>
    
    </ul>


    </div>

    <div className='App'>
      <Card/>
    </div>
    <br></br>
    

  </>

    



    )
}
