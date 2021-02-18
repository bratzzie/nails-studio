import React from 'react'
import styled from 'styled-components'
import './faq.css'
import FAQBack from '../images/back3.webp'
const FAQ = () => {
    return (
      <FAQSection>
        <div id="faq">
        <h1  data-sal="slide-down"
              data-sal-delay="300"
              data-sal-easing="ease" >FAQ</h1>
        <ul>
          <li 
              data-sal="slide-down"
              data-sal-delay="300"
              data-sal-easing="ease">
            <input 
            type="checkbox" />
            <i></i>
            <h2>Do you believe in Sailor Moon?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae debitis iusto voluptatum doloribus rem, qui nesciunt labore tempore fugit iste deserunt incidunt error provident repudiandae laudantium quo ipsa unde perspiciatis, nihil autem distinctio! Deserunt, aspernatur.</p>
          </li>
          <li
          data-sal="slide-down"
          data-sal-delay="400"
          data-sal-easing="ease">
            <input type="checkbox" />
            <i></i>
            <h2>What do you think about Luna?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quasi, quia provident facere recusandae itaque assumenda fuga veniam dicta earum dolorem architecto facilis nisi pariatur.</p>
          </li>
          <li
          data-sal="slide-down"
          data-sal-delay="500"
          data-sal-easing="ease">
            <input type="checkbox" />
            <i></i>
            <h2>You may find here something interesting!</h2>
            <p>Nam quas placeat assumenda mollitia magni consequatur dolorum, quod nihil distinctio aperiam officia alias! Voluptate dolore ex officiis sit, magnam non a, eligendi pariatur aut, earum dolores tenetur ipsam id illo deleniti. Laudantium deserunt eaque ipsam voluptatum consequuntur voluptatibus sed minima ad accusamus debitis eos similique laboriosam, molestiae? Consequatur neque tempore quis. Eligendi, in ut aspernatur esse nesciunt libero.</p>
          </li>
        </ul>
      </div>
      </FAQSection>
    )
}

export default FAQ

const FAQSection = styled.section`

background-image: url(${FAQBack});
 background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
padding-top: 2rem;`