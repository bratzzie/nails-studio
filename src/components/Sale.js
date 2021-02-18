import React from 'react'
import styled from "styled-components"
import SaleBack from '../images/back5.webp'
import EmailElem from './EmailElem'

const Sale = () => {
    return (
        <div>
          <SaleContainer>
            <SaleContent>
                <h1>Wanna get 50% sale?</h1>
                <p>Subscribe, we'll do everything for you!</p>
                <form action="#" id="form" method="POST">
                    <FormWrap>
                        <EmailElem/>
                       
                    </FormWrap>
                </form>
            </SaleContent>
        </SaleContainer>  
        </div>
    )
}

export default Sale

const SaleContainer = styled.div`
background: #1D976C;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #93F9B9, #1D976C);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #93F9B9, #1D976C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



background-image: url(${SaleBack});
 background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;

height: 450px;
width: 100%;
padding: 5rem calc((100vw - 1300px)/2);
color: #fff;
display: flex;
justify-content: center;
align-items: center;
`

const SaleContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1{
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
    font-family: 'Shrikhand', cursive;
font-weight: 400;
letter-spacing: 3px;
}

p{
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
    font-family: 'Fanwood Text', serif;
}

form{
    z-index: 10;
}`

const FormWrap = styled.div`
input{
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
   
    border: none;
    margin-right: 1rem;

}

@media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input{
        margin-bottom: 1rem;
        width: 100%;
        margin-right: 0;
    }
}
`

