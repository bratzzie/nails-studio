import React from 'react'
import styled from 'styled-components'
const MoreInfo = () => {
    return (
        <SectionMoreInfo>
        <MoreInfoWrapper>
          <article>
            <MoreInfoTitle
             data-sal="slide-down"
             data-sal-delay="300"
             data-sal-easing="ease">
              <h3>What is our mission?</h3>
             
            </MoreInfoTitle>
            <MoreInfoText>
              <MoreInfoSub>To help people</MoreInfoSub>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere dui nec fringilla pretium. 
              Donec convallis tortor id sapien mattis tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                          </p>
              <p>
                Quisque ultrices, nisi id tincidunt sollicitudin, massa tortor malesuada purus, sed placerat nulla risus non sapien.
               Nulla sagittis blandit enim vitae egestas. Maecenas placerat augue odio, sed ornare enim bibendum in. Nulla sit amet imperdiet felis, non aliquet orci.
           </p>
            </MoreInfoText>
            <MoreInfoText>
              <MoreInfoSub>To inspire people</MoreInfoSub>
              <p>
              Quisque ultrices, nisi id tincidunt sollicitudin, massa tortor malesuada purus, sed placerat nulla risus non sapien.
               Nulla sagittis blandit enim vitae egestas.
                       </p>
              <p>
              Sed hendrerit quam nec tellus consectetur luctus. Sed augue nulla, finibus vitae leo id, aliquam tempor mauris. Sed id ultricies lectus. In sit amet erat urna. Pellentesque eget posuere enim. Nunc vitae dui lacus. Donec accumsan vulputate mi, quis dapibus velit rhoncus quis. Aliquam tellus ligula, fermentum a sollicitudin at, gravida ultricies est. 
              </p>
            </MoreInfoText>
          </article>
        </MoreInfoWrapper>
      </SectionMoreInfo>
    )
}

export default MoreInfo

const SectionMoreInfo = styled.section`
 height: 100%;
    min-height: 100vh;
    font-size: 1.4rem;
    position: relative;
    background-color: #FFF6F5;
    article {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    padding: 3rem 0;
  }

  @media only screen and (max-width: 1149px) {
    article {
      grid-template-columns: 1fr;
      grid-gap: 0;
    }
  }
  
  
  
  
`

const MoreInfoWrapper = styled.div`
  padding: 5rem 10rem 6rem;
    height: 100%;
    min-height: 100vh;
    max-width: 1400px;
    margin: 0 auto;
    
    @media only screen and (max-width: 649px) {
   
      padding: 10rem 2rem 8rem;
    
  }`

const MoreInfoTitle = styled.div`
    grid-column-end: span 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h3 {
    font-size: 2.4rem;
    font-family: 'Shrikhand', cursive;
    font-weight: 400;
  }`

const MoreInfoText = styled.div`
grid-column-end: span 2;
    background: #ffffffaa;
    padding: 2rem;
    text-align: justify;
    
    p {
    padding-bottom: 1.5rem;
    color: #555;
    line-height: 1.9rem;
    font-family: 'Fanwood Text', serif;
 
  }
  
  @media only screen and (max-width: 1149px){
      grid-column-end: -1;
    }
  
  `

    const MoreInfoSub = styled.h4`
    font-size: 1.6rem;
    text-align: center;
    color: inherit;
    padding-bottom: 1.5rem;
    font-family: 'Ribeye Marrow', cursive;
    font-weight: 500;
    letter-spacing: 2px;`