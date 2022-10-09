import React from "react";
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';



export default function card() {

  const cardStyle = {
    display: "block",
    transitionDuration: "0.3s",
    height: "25vw",
    width:'18rem'

  };

  return (
    <>
    <div className="container">
      <div className="row d-flex justify-content-center">
    <div className='col-lg-3 mt-4'>
      <Card style={cardStyle}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1586991362097-2b4c41a7f25d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXMlMjBpdCUyMHNhZmUlMjBkZWxpdmVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      <Card.Body>
        <Card.Title>গর্ভধারণের সময় যেসব কাজ অনিরাপদ</Card.Title>
        <Card.Text>

        </Card.Text>
        <Button variant="secondary">বিস্তারিত দেখুন...</Button>
      </Card.Body>   
      </Card>
    </div>
    
    
    <div className='col-lg-3 mt-4'>
      <Card style={cardStyle}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1510154221590-ff63e90a136f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" />
      <Card.Body>
        <Card.Title>প্রসবকালীন সতর্কতা ও প্রসববেদনা</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="secondary">বিস্তারিত দেখুন...</Button>
      </Card.Body>   
      </Card>
    </div>
    <div className='col-lg-3 mt-4'>
      <Card style={cardStyle}>
      <Card.Img variant="top" src="https://www.babycenter.com/ims/2022/04/Stocksy_txp8e2c9ce8RvO300_Medium_1095210_wide.jpg.pagespeed.ce.Dz6TUY8mnf.jpg" />
      <Card.Body>
        <Card.Title>শিশুর মলের কোন রঙ এবং টেক্সচার স্বাভাবিক?</Card.Title>
        <Card.Text>
        By Stephanie Watson
        </Card.Text>
        <Button variant="secondary">বিস্তারিত দেখুন...</Button>
      </Card.Body>   
      </Card>
    </div>
    <div className='col-lg-3 mt-4'>
      <Card style={cardStyle}>
      <Card.Img variant="top" src="https://images.unsplash.com/flagged/photo-1564228539519-4dfe919785a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFieSUyMGJhdGh8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" />
      <Card.Body>
        <Card.Title>শিশুর গোসল</Card.Title>
        <Card.Text>
        By Kandis Lake
        </Card.Text>
        <Button variant="secondary">বিস্তারিত দেখুন...</Button>
      </Card.Body>   
      </Card>
    </div>
    <div className='col-lg-3 mt-4'>
      <Card style={cardStyle}>
      <Card.Img variant="top" src="https://www.babycenter.com/ims/2015/12/15_088_Baby-Center_Rice_Peas_17433_4x3.jpg.pagespeed.ce.-jBOsW0PC1.jpg" />
      <Card.Body>
        <Card.Title>বয়সভেদে শিশুর খাবারের রেসিপি</Card.Title>
        <Card.Text>
        By Rebekah Wahlberg
        </Card.Text>
        <Button variant="secondary">বিস্তারিত দেখুন...</Button>
      </Card.Body>   
      </Card>
    </div>
    <div className='col-lg-3 mt-4'>
      <Card style={cardStyle}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1483193722442-5422d99849bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnRhbCUyMGhlYWx0aCUyMGF3YXJlbmVzcyUyMGJhYnl8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" />
      <Card.Body>
        <Card.Title>শিশুর শারিরিক ও মানসিক বিকাশ</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="secondary">বিস্তারিত দেখুন...</Button>
      </Card.Body>   
      </Card>
    </div>
    </div>
    </div>


    </>

    
  )
}

