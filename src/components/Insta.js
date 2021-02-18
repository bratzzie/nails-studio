import React from 'react'
import styled from 'styled-components'

const Insta = () => {
    return (
        <InstaContainer className="container">

        <InstaHeading className="heading">Check out the loveliness we can do<span> @instagramnails__</span></InstaHeading>
    

        <InstaCont className="container">
  <div className="row">
    <div     data-sal="slide-down"
             data-sal-delay="300"
             data-sal-easing="ease"
             data-gallery="gallery" className="col-md-4">
      <img src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w=500&h=500&fit=crop" alt="Instagram Photos Of The Salon N.o.1" className="img-fluid rounded"/>
         </div>
    <div
        data-sal="slide-down"
        data-sal-delay="400"
        data-sal-easing="ease" data-gallery="gallery" className="col-md-4">
      <img src="https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w=500&h=500&fit=crop" alt="Instagram Photos Of The Salon N.o.2" className="img-fluid rounded"/>
    </div>
    <div
        data-sal="slide-down"
        data-sal-delay="500"
        data-sal-easing="ease" data-gallery="gallery" className="col-md-4">
      <img src="https://images.unsplash.com/photo-1566568484632-41b89ce6efbc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w=500&h=500&fit=crop" alt="Instagram Photos Of The Salon N.o.3" className="img-fluid rounded"/>
    </div>
  </div>

</InstaCont>


       
        </InstaContainer>
    )
}

export default Insta
const InstaCont = styled.div``

const InstaContainer = styled.div`
	max-width: 100rem;
	margin: 0 auto;
	padding: 0 2rem 2rem;
    min-height: 100vh;
    position: relative;
    padding-bottom: calc((100vw - 1300px) / 2);
    padding-top: 2rem;
    background-color: #FFF6F5;
  
   
    `
  
    const InstaHeading = styled.h1`
     font-family: 'Shrikhand', cursive;
	font-weight: 400;
	line-height: 1.5;
	text-align: center;
	padding: 3.5rem 0;
	color: #1a1a1a;
    font-size: clamp(1.8rem, 6vw, 4rem);

    span {
	display: block;
    font-family: 'Ribeye Marrow', cursive;
    text-transform: uppercase;
	letter-spacing: 2px;
    font-size: 30px;
	color: #a7a9ac;
    
}

`