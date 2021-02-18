import React from 'react'
import './team.css'
import {FaInstagram, FaTelegramPlane, FaFacebookSquare, FaPhone} from 'react-icons/fa'
import styled from 'styled-components'
import {Link} from 'gatsby'
const Team = () => {
    return (
      <TeamSection>

    
        <div className="container">
 <h2 className="text-center bottom-line"
  >Meet Our Masters</h2>
   <p className="subheading text-center"
    data-sal="fade"
    data-sal-delay="800"
    data-sal-easing="ease">Creative Beauties</p>

  <div className="row team-row">

    <div 
       className="col-md-4 col-sm-6 team-wrap">
      <div className="team-member text-center">
        <div className="team-img">
          <img src="https://images.unsplash.com/photo-1573497490790-9053816a01d4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w=500&h=600&fit=crop" alt=""/>
          <div className="overlay">
            <div className="team-details text-center">
              <p>
                We will make that one manicure, which you need
              </p>
              <div className="socials mt-20">
                 <Link to="/404/"><FaInstagram/></Link>
                 <Link to="/404/"><FaTelegramPlane/></Link>
                 <Link to="/404/"><FaFacebookSquare/></Link>
                 <Link to="/404/"><FaPhone/></Link>
              </div>
            </div>
          </div>
        </div>
        <h6 className="team-title">Jessica Shell</h6>
        <span>Nail Master</span>
      </div>
    </div>
  

    <div
   className="col-md-4 col-sm-6 team-wrap">
      <div className="team-member text-center">
        <div className="team-img">
          <img src="https://images.unsplash.com/photo-1573878742615-3ce8fac77273?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w=500&h=600&fit=crop" alt=""/>
          <div className="overlay">
            <div className="team-details text-center">
              <p>
              We will make that one pedicure, which you need
              </p>
              <div className="socials mt-20">
                 <Link to="/404/"><FaInstagram/></Link>
                 <Link to="/404/"><FaTelegramPlane/></Link>
                 <Link to="/404/"><FaFacebookSquare/></Link>
                 <Link to="/404/">< FaPhone/></Link>
              </div>
            </div>
          </div>
        </div>
        <h6 className="team-title">Loren Mucher</h6>
        <span>Nail Master</span>
      </div>
    </div>
 

    <div 
      className="col-md-4 col-sm-6 team-wrap">
      <div className="team-member last text-center">
        <div className="team-img">
          <img src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&w=500&h=600&fit=crop" alt=""/>
          <div className="overlay">
            <div className="team-details text-center">
              <p>
              We will make that one design, which you need
              </p>
              <div className="socials mt-20">
                 <Link to="/404/"><FaInstagram/></Link>
                 <Link to="/404/"><FaTelegramPlane/></Link>
                 <Link to="/404/"><FaFacebookSquare/></Link>
                 <Link to="/404/">< FaPhone/></Link>
              </div>
            </div>
          </div>
        </div>
        <h6 className="team-title">Tortina Yab</h6>
        <span>Nail Master</span>
      </div>
    </div>
 

  </div>
</div>  
</TeamSection>
    )
}

export default Team
const TeamSection = styled.section`

margin: 2rem 0;
 margin-bottom: 0;

 
 margin-top: 0;
min-height: 110vh;

`
