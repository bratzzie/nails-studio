import React from 'react'
import './form.css'
import ContactBack from '../../images/back6.webp'
import Map from './Map'
import styled from 'styled-components'
import FormContact from './FormContact'

const ContactSection = () => {
    return (
        <ContactSec>
        <ContactContainer className="container">
          <div>
            <h1>You can leave us a <b>phone</b> <br/>or find us by yourself</h1>      
       <FormContact /> 
          </div>
        <MapWrapp>
             <Map/>
        </MapWrapp>
             
      
     
        </ContactContainer>
        </ContactSec>
    )
}

export default ContactSection
const MapWrapp = styled.div`

overflow: hidden;


`
const ContactSec = styled.section`
 margin: 2rem 0;
 margin-bottom: 0;
 background-color: #F4D6D3;
 margin-top: 0;
height: 110vh;
background-image: url(${ContactBack});
 background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;

 h1 {
  font-size: clamp(1.8rem, 6vw, 3.5rem);
    font-family: 'Shrikhand', cursive;
    font-weight: 400;
  }`

const ContactContainer = styled.div`
  max-width: 1100px;
    margin: auto;
    overflow: hidden;
    padding: 5rem 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 700px) {
      
      grid-template-columns: 1fr;
      text-align: center;
    
  
    ContactContainer div:first-child {
      order: 2;
    }
  
    ContactContainer div:nth-child(2) {
      order: -1;
    }
  
  }`