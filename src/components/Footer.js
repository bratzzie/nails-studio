import React from 'react'
import styled from "styled-components"
import {Link} from 'gatsby'
import Logo from './Logo'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <Logo/>
                    <h1>NailStudio</h1>
                    <p>Life is not perfect, but <b>your</b> nails can be! </p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to='/'><b>Phone:</b> <br/> +380962233111 <br/> +380509988321</FooterLink>
                    <FooterLink to='/'><b>Instagram</b>: <br/> @instagramnails__prot</FooterLink>
                    <FooterLink to='/'><b>Facebook:</b> <br/> @facebooknails__prot</FooterLink>
                    <FooterLink to='/'><b>Address:</b> <br/>Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
            <FooterLinkItems>
                    <FooterLinkTitle>Privacy</FooterLinkTitle>
                    <FooterLink to='/'>Terms & Conditions</FooterLink>
                    <FooterLink to='/'>Privacy Policy</FooterLink>
                    <FooterLink to='/'>Certificates</FooterLink>

                </FooterLinkItems>
              
                <FooterLinkItems>
                    <FooterLinkTitle>Quick Links</FooterLinkTitle>
                    <FooterLink to='/'>Contacts</FooterLink>
                    <FooterLink to='/'>Price List</FooterLink>
                    <FooterLink to='/'>About Company</FooterLink>
                    <FooterLink to='/'>Sales</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer


const FooterContainer = styled.div`
padding: 3rem calc((100vw - 1100px) / 2);
display: grid;
grid-template-columns: repeat(2, 1fr);
color: #000;
background: #fafafb;

`
const FooterDesc = styled.div`
padding: 0 2rem;
font-family: 'Fanwood Text', serif;
font-size: 20px;
h1{
    margin-bottom: 2rem;
    color: #FA585A;
    font-family: 'Shrikhand', cursive;
    font-weight: 400;
}

@media screen and (max-width: 400px){
    padding: 1rem;
    }

    @media screen and (max-width: 300px){
    padding: 0;
}
`

const FooterLinksWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);

@media screen and (max-width: 820px){
    grid-template-columns: 1fr;
}
`
const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1rem 2rem;

@media screen and (max-width: 400px){
    padding: 1rem;
}

@media screen and (max-width: 300px){
    padding: 0;
}
`

const FooterLinkTitle = styled.h2`
font-size: 20px;
margin-bottom: 16px;
font-family: 'Fanwood Text', serif;
`

const FooterLink = styled(Link)`
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
color: #3d3d4e;
font-family: "Montserrat", sans-serif;
&:hover{
    color: #FA585A;
    transition: 0.3s ease-out;
}
`

