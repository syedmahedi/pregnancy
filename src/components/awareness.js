import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Awareness = () => {


  return (
      <> 
    <div className='mt-4 flex-wrap'>
        <h3 style={{textAlign: "center"}}>গর্ভাবস্থায় পুষ্টি</h3><hr></hr>
        <div className="container ">
      <div className="row gy-3 d-flex justify-content-center">
        <div className='col-sm-6 col-md-4 col-lg-3 mt-4'>
      <Card>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1559598467-f8b76c8155d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
      <Card.Body>
        <Card.Title>গর্ভাবস্থার জন্য সেরা দুধ</Card.Title>
        <Card.Text>
        By Rebekah Wahlberg
        | September 16, 2021
        </Card.Text>
        <Button variant="secondary">বিস্তারিত দেখুন...</Button>
      </Card.Body>   
      </Card>
      </div>

      <div className='col-sm-6 col-md-4 col-lg-3 mt-4'>
      <Card>
      <Card.Img variant="top" src="https://www.babycenter.com/ims/2015/02/choppedsweetpotato_wide.jpg.pagespeed.ce.WjnvemFFqc.jpg" />
      <Card.Body>
        <Card.Title>গর্ভাবস্থায় ভিটামিন এ</Card.Title>
        <Card.Text>
        By Eva Dasher
        | June 7, 2021
        </Card.Text>
        <Button variant="secondary">বিস্তারিত দেখুন...</Button>
      </Card.Body>   
      </Card>
      </div>

      <div className='col-sm-6 col-md-4 col-lg-3 mt-4'>
      <Card>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1625488921948-5610bcf85ef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <Card.Body>
        <Card.Title>গর্ভাবস্থায় ভিটামিন সি</Card.Title>
        <Card.Text>
        By Eva Dasher
        | May 27, 2021
        </Card.Text>
        <Button variant="secondary">বিস্তারিত দেখুন...</Button>
      </Card.Body>   
      </Card>
      </div>


      <div className='col-sm-6 col-md-4 col-lg-3 mt-4'>
      <Card>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <Card.Body>
        <Card.Title>গর্ভাবস্থায় খাবার পরিকল্পনা</Card.Title>
        <Card.Text>
        By Nancy Montgomery
        | May 7, 2021
        </Card.Text>
        <Button variant="secondary">বিস্তারিত দেখুন...</Button>
      </Card.Body>   
      </Card>
      </div>



      </div>
      </div>
        
    </div>
      </>
      
  )
};

export default Awareness;