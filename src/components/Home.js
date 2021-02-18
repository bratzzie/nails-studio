import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import HomeImg from '../images/nailnew.png'
import HomeBack from '../images/back2.webp'
const Home = () => {

  
    return (
        <HomeSection>
        <HomeContainer
         className="container">
          <div>
            <h1
             data-sal="slide-down"
             data-sal-delay="300"
             data-sal-easing="ease"
            disabledClassName ="sal-disabled">Life is not perfect, but your <b>nails</b> can be</h1>
            <p
            data-sal="slide-right"
            data-sal-delay="300"
            data-sal-easing="ease">
            You can’t buy happiness but you can buy nail art and that’s 
            basically the same thing. Our Studio is already waiting for you! Make sure 
            that you get acquainted with our staff and portfolio.  
            </p>
            <Button 
         big="true" primary="true" to='/#pricelist/'>LEARN MORE</Button>
          </div>
          <img
           data-sal="slide-left"
           data-sal-delay="300"
           data-sal-easing="ease"
           src={HomeImg} alt="Nails Studio" />


           
        </HomeContainer>
      </HomeSection>
    )
}

export default Home

const HomeSection = styled.section`
 margin: 2rem 0;
 margin-bottom: 0;

 background-image: url(${HomeBack});
 background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
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
      width: 80%;
      margin: auto;
    }
   p{
       margin-bottom: 2rem;
    }
   }  `

const HomeContainer = styled.div`
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

padding-left: 0.8rem;
    @media (max-width: 700px) {
      
      grid-template-columns: 1fr;
      text-align: center;
    
  
    HomeContainer div:first-child {
      order: 2;
    }
  
    HomeContainer div:nth-child(2) {
      order: -1;
    }
  
  }
      `