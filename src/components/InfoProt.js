import React from 'react'
import styled from 'styled-components'
import InfoImg from '../images/nail2.png'
import InfoBack from '../images/back4.webp'
const InfoProt = ({
    id,
    imgStart,
    topLine,
    headline,
    description,

    alt
}) => {
    return (
        <InfoContainer id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper
                     data-sal="slide-down"
                     data-sal-delay="300"
                     data-sal-easing="ease"
                    disabledClassName ="sal-disabled">
                        <TopLine>{topLine}</TopLine>
                        <Heading>{headline}</Heading>
                        <Subtitle>{description}</Subtitle>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                   <ImgIn 
               data-sal="slide-down"
               data-sal-delay="300"
               data-sal-easing="ease"
              disabledClassName ="sal-disabled"
              src={InfoImg} alt={alt}/> </ImgWrap></Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoProt

const InfoContainer = styled.div`
color: #fff;

background-image: url(${InfoBack});
 background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;

@media screen and (max-width: 768px){
    padding: 100px 0;
}`

const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;`

const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'` : `'col1 col2'` };

@media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` };
}
`

const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`

const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;`

const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 0px;
color: #000;`
const TopLine = styled.div`
color: #01bf71;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
font-family: 'Ribeye Marrow', cursive;`

const Heading = styled.h1`
margin-bottom: 24px;
font-size: clamp(2rem, 5vw, 8rem);
line-height: 1.1;
font-family: 'Shrikhand', cursive;
    font-weight: 400;
    color: #444;
`

const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;

line-height: 24px;
color: #000;
font-family: 'Fanwood Text', serif;
font-size: clamp(1rem, 2.5vw, 1.5rem);
`

const ImgWrap = styled.div`
max-width: 420px;
height: 60%;
z-index: -1;
@media screen and (max-width: 768px){
  max-width: 250px;
  }
`

const ImgIn = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
z-index: -1;
`