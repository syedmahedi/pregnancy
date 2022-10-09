import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import '../App.css';

const Doctors = () => {

  const div1 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    float:'right',
    width:'50%',
  };

  const div2 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    float:'left',
    // width: '49.99%'
  };

  return (
    <> 
        <div className="mt-4">
          
        <h3 style={{textAlign: "center"}}>বাংলাদেশের সেরা শিশু বিশেষজ্ঞের তালিকা</h3><hr></hr>
        <div style={div2}>
        <ul className='mx-5'>
        <h4><b><a href='http://www.whereindoctor.com/2018/01/professor-dr-golam-muin-uddin.html' style={{textDecoration: 'none'}}>Prof. Dr. Golam Muin Uddin</a></b></h4>
        <li>
        MBBS, FCPS (Pediatrics), FRCP (Edinburgh, UK)
        </li>
        <li>
        Child Specialist
        </li>
        <li>
        Professor & Chairman, Dept. of Paediatric, BSMMU
        </li>
        <li>
        Chamber: Prescription Point Banani
        </li>
        <li>
        House-105, Road-12, Block-E, Banani, Dhaka-1213
        </li>
        <li>
        Phone: 029897222, 028833389
        </li>
        </ul>
        </div>


        <div style={div1}>
        <ul className='mx-5'>
        <h4><b><a href='https://hospitaldoctorlist.com/prof-dr-abdul-matin-child-specialist-in-dhaka/' style={{textDecoration: 'none'}}>Prof. Dr. Abdul Matin</a></b></h4>
        <li>
        MBBS, BCS (Health), MD (Child)
        </li>
        <li>
        Specialist in Paediatrics.
        </li>
        <li>
        Professor & Head, Dept. Of Paediatrics, SSMCH
        </li>
        <li>
        Chamber: Dhaka Central International Medical College & Hospital
        </li>
        <li>
        2/1 Ring Road, Shyamoli, Mohammadpur, Dhaka-1207
        </li>
        <li>
        Phone: 01783661144, 01755597798
        </li>
        </ul>
        </div>
        <br></br>
        <br></br>


        <div style={div2}>
        <ul className='mx-5'>
        <h4><b><a href='http://www.whereindoctor.com/2018/01/professor-dr-golam-muin-uddin.html' style={{textDecoration: 'none'}}>Prof. Dr. Golam Muin Uddin</a></b></h4>
        <li>
        MBBS, FCPS (Pediatrics), FRCP (Edinburgh, UK)
        </li>
        <li>
        Child Specialist
        </li>
        <li>
        Professor & Chairman, Dept. of Paediatric, BSMMU
        </li>
        <li>
        Chamber: Prescription Point Banani
        </li>
        <li>
        House-105, Road-12, Block-E, Banani, Dhaka-1213
        </li>
        <li>
        Phone: 029897222, 028833389
        </li>
        </ul>
        </div>
        <br></br>
        <br></br>



        <div style={div1}>
        <ul className='mx-5'>
        <h4><b><a href='https://hospitaldoctorlist.com/prof-dr-abdul-matin-child-specialist-in-dhaka/' style={{textDecoration: 'none'}}>Prof. Dr. Abdul Matin</a></b></h4>
        <li>
        MBBS, BCS (Health), MD (Child)
        </li>
        <li>
        Specialist in Paediatrics.
        </li>
        <li>
        Professor & Head, Dept. Of Paediatrics, SSMCH
        </li>
        <li>
        Chamber: Dhaka Central International Medical College & Hospital
        </li>
        <li>
        2/1 Ring Road, Shyamoli, Mohammadpur, Dhaka-1207
        </li>
        <li>
        Phone: 01783661144, 01755597798
        </li>
        </ul>
        </div>

        
        

        </div>
      
      
    </>  
      
  )
};

export default Doctors;

