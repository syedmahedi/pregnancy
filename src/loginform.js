import React, {useState,useEffect} from "react";
import "./loginform.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons'




const LoginForm = () => {

    


    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 2000)
    }

    const onSuccess = e => {
        alert("User signed in")
        console.log(e)
    }

    const onFailure = e => {
        alert("User sign in Failed")
        console.log(e)
    }

    return (
        <div className="page">
        <div className="cover">
            <br></br>
            <h3><b>Track your baby's development</b></h3><br></br>
            <input type="text" placeholder="Enter Email" /><br></br>
            <input type="password" placeholder="Enter Password" /><br></br>
            <input type="tel" placeholder="Enter Mobile Number" /><br></br>
            <h5>Due date or child birthday</h5>
            <input type="date" placeholder="Due date or child birthday" /><br></br>
            
            <div className="login-btn" onClick={popup}>Submit</div>
            <br></br><b>Connect with us</b>
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
            <small className="text-center mt-3" style={{fontSize:13,color:'GrayText'}}>&copy; প্যারেন্টিং পার্টনার</small>
            
            
            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>
            
        </div>
        </div>
        
    )
}

export default LoginForm

