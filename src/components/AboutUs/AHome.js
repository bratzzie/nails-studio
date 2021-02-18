import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import AHomeImg from '../../images/nail3.png'

const AHome = () => {
    return (
        <AHomeSection>
        <AHomeContainer>
          <div>
            <h1
            data-sal="slide-right"
            data-sal-delay="300"
            data-sal-easing="ease">Want to know <b>more</b> about us?</h1>
            <p
             data-sal="slide-right"
             data-sal-delay="300"
             data-sal-easing="ease">
            Fusce suscipit dui odio, consequat posuere libero laoreet ut. Praesent auctor auctor leo, a blandit odio interdum in. Donec varius est sed lectus porttitor porttitor. Morbi non mi erat. Integer eu vehicula leo, aliquam feugiat arcu.
                          </p>
            <Button
             data-sal="slide-right"
             data-sal-delay="2000"
             data-sal-easing="ease" big="true" to='/contacts'>CONTACT US</Button>
          </div>
          <img
           data-sal="slide-left"
           data-sal-delay="300"
           data-sal-easing="ease"
           src={AHomeImg} alt="Nails Contacts" />
        </AHomeContainer>
      </AHomeSection>
    )
}

export default AHome


const AHomeSection = styled.section`
 margin: 2rem 0;
 margin-bottom: 0;
 background-color: #F4D6D3;
 margin-top: 0;
height: 100vh;

 
h1 {
    font-size: clamp(1.8rem, 6vw, 4rem);
    font-family: 'Shrikhand', cursive;
  }
  
 p {
    margin: 1rem 0;
    font-family: 'Fanwood Text', serif;
    margin-bottom: 4rem;
    font-size: clamp(0.2rem, 3.5vw, 1.2rem);
  }
  img{
  
  }
   @media (max-width: 700px){
       img {
      width: 50%;
      margin: auto;
    }
    p{
       margin-bottom: 2rem;
    }
   }  `

const AHomeContainer = styled.div`
  max-width: 1200px;
    margin: auto;
    overflow: hidden;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    align-items: center;
    justify-content: center;
   min-height: 100vh;
    

   height: calc(100vh - 80px);
max-height: 100%;
padding: 0rem calc((100vw - 1300px) / 2);

    
    @media (max-width: 700px) {
   
      grid-template-columns: 1fr;
      text-align: center;
    
  
    AHomeContainer div:first-child {
      order: 2;
    }
  
   AHomeContainer div:nth-child(2) {
      order: -1;
    }
  
  }
      `