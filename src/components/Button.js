import  styled  from "styled-components";
import { Link } from "gatsby";

export const Button = styled(Link)`
background: ${({primary}) => (primary ? "#00A2FF" : "#FA585A")};
white-space: nowrap;
padding: ${({big}) => (big ? "16px 40px" : "10px 32px")};
color: #FFF;
font-size:  ${({big}) => (big ? "20px" : "16px")};
color: ${({primary}) => (primary ? "#FFF" : "#FFF")};
outline: none;
border: 2px solid #000;
min-width: 100px;
cursor: pointer;
text-decoration: none;
transition: 0.3s !important;
border-radius:  ${({round}) => (round ? "50px" : "none")};
font-weight: 500;
letter-spacing: 2px;
font-family: 'Ribeye Marrow', cursive;
&:hover {
    background: ${({primary}) => (primary ? "#FA585A" : "#00A2FF")};
    transform: translateY(-2px);
   text-decoration: none;
   color: ${({primary}) => (primary ? "#FFF" : "#FFF")};
}


`