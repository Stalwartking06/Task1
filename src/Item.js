import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import Foot from './Foot';

export default function Item() {
    const location=useLocation();
    const data=location.state
    const[apidata,setData]=useState({});
    useEffect(()=>{
      fetch("https://fakestoreapi.com/products/"+data.pid).then((result)=>{
        result.json().then((data)=>{
          setData(data)
        })
      })
    },[])
  return (
    <div>
      <MDBCard><center>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <center><MDBCardImage src={apidata.image} fluid alt='...' 
        style={{height:"300px", width:"400px"}}/></center>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{apidata.title}</MDBCardTitle>
        <MDBCardText>
          {apidata.description}
        </MDBCardText>
        <MDBCardText>
          {apidata.Category}
        </MDBCardText>
        <MDBCardText>
        {apidata.rating?.rate}
        </MDBCardText>
        <MDBCardText>
          {apidata.price*65}
        </MDBCardText>
        <MDBBtn href='#'>Buy Now</MDBBtn>
      </MDBCardBody>
      </center>
    </MDBCard>
    <Foot></Foot>
    </div>
  )
}
