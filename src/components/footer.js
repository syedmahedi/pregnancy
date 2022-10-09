import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <CDBFooter className="shadow mt-5" >
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="navbar-brand">
              <img alt="logo" src="https://scontent.fdac27-2.fna.fbcdn.net/v/t1.6435-9/179336917_1428523640831204_932934920287558860_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=MT91nQIZvDEAX8Zv2PB&_nc_ht=scontent.fdac27-2.fna&oh=00_AT_RWn1iMnwOB0NpajtA8XmonPhqt4UgCFA9wNNnuvEPuw&oe=6363B6A4" width="40px" />
              <span className="ml-3 h5 font-weight-bold">প্যারেন্টিং পার্টনার</span>
            </a>
            <p className="my-3" style={{ width: '250px' ,fontSize:13,color:'GrayText'}}>
            “একটি শিশু এমন একজন, যাকে আপনি নয় মাস ধরে আপনার ভিতরে বহন করেন, আপনার বাহুতে তিন বছর ধরেন এবং আপনার মৃত্যুর দিন পর্যন্ত আপনার হৃদয়ে থাকে।” <br></br><p className='mb-3'>– Mary Mason</p>
            </p>
            
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600'}}>
            ADDRESS
            </p>
            <CDBBox flex="column" display="flex" style={{cursor: 'pointer', padding: '0'}}>  
                <a href='https://en.wikipedia.org/wiki/Rajshahi' style={{textDecoration: 'none',color:'grey'}} >Rajshahi,Bangladesh</a>
                <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' style={{textDecoration: 'none',color:'grey'}} >syedmahedihasen207@gmail.com</a>
                <a href='https://wa.me/8801751110659' style={{textDecoration: 'none',color:'grey'}} >+880 1751-110-659</a>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <a href='https://en.wikipedia.org/wiki/Rajshahi' style={{textDecoration: 'none',color:'grey'}} >Rajshahi,Bangladesh</a>
                <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' style={{textDecoration: 'none',color:'grey'}} >syedmahedihasen207@gmail.com</a>
                <a href='https://wa.me/8801751110659' style={{textDecoration: 'none',color:'grey'}} >+880 1751-110-659</a>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Survices
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <a href='https://en.wikipedia.org/wiki/Rajshahi' style={{textDecoration: 'none',color:'grey'}} >Rajshahi,Bangladesh</a>
                <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' style={{textDecoration: 'none',color:'grey'}} >syedmahedihasen207@gmail.com</a>
                <a href='https://wa.me/8801751110659' style={{textDecoration: 'none',color:'grey'}} >+880 1751-110-659</a>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          style={{ width: '100%' }}
          className="mx-auto mt-2"
        > 
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
        </CDBBox>
        <small className="text-center mt-3">&copy; প্যারেন্টিং পার্টনার | OFFICIAL WEBSITE , 2022</small>
      </CDBBox>
    </CDBFooter>
  );
};