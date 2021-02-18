import React from 'react'
import styled from 'styled-components'
const Price = () => {
    return (
      <PriceSection id="pricelist"
     >
      <div class="container">
  <Heading>
              <ModuleTitle>Price List</ModuleTitle>
              <ModuleSubtitle>Our best deals. If the service, which you need, is not in this list, just ask masters about it</ModuleSubtitle>
            </Heading>
       
  
        <div class="row">
  
          <div class="col-sm-6">
  
            <Menu>
              <div class="row">
                <div class="col-sm-8">
                  <MenuTitle>Gel Nails</MenuTitle>
                  <MenuDetail>Gel Shape & Polish</MenuDetail>
                </div>
                <MenuPriceDetail class="col-sm-4">
                  <MenuPrice>$30</MenuPrice>
                </MenuPriceDetail>
              </div>
            </Menu>
  
            <Menu>
              <div class="row">
                <div class="col-sm-8">
                  <MenuTitle>Shellac Nails</MenuTitle>
                  <MenuDetail>Full Set</MenuDetail>
                </div>
                <MenuPriceDetail  class="col-sm-4">
                  <MenuPrice>$25</MenuPrice>

                </MenuPriceDetail>
              </div>
            </Menu>
  
            <Menu>
              <div class="row">
                <div class="col-sm-8">
                  <MenuTitle>Powder Gel Nails</MenuTitle>
                  <MenuDetail>Full Set</MenuDetail>
                </div>
                <MenuPriceDetail class="col-sm-4">
                  <MenuPrice>$50</MenuPrice>
                </MenuPriceDetail>
              </div>
            </Menu>


            <Menu>
              <div class="row">
                <div class="col-sm-8">
                  <MenuTitle>Gel Refill</MenuTitle>
                  <MenuDetail>Full Set</MenuDetail>
                </div>
                <MenuPriceDetail class="col-sm-4">
                  <MenuPrice>$15</MenuPrice>

                </MenuPriceDetail>
              </div>
            </Menu>


            <Menu>
              <div class="row">
                <div class="col-sm-8">
                  <MenuTitle>Spa Pedicure</MenuTitle>
                  <MenuDetail>Shellac Included</MenuDetail>
                </div>
                <MenuPriceDetail  class="col-sm-4">
                  <MenuPrice>$40</MenuPrice>
                </MenuPriceDetail>
              </div>
            </Menu>
  
            <Menu>
              <div class="row">
                <div class="col-sm-8">
                  <MenuTitle>Manicure & Spa Pedicure</MenuTitle>
                  <MenuDetail>Shellac Included</MenuDetail>
                </div>
                <MenuPriceDetail class="col-sm-4">
                  <MenuPrice>$60</MenuPrice>
                </MenuPriceDetail>
              </div>
            </Menu>
  
            <Menu>
              <div class="row">
                <div class="col-sm-8">
                  <MenuTitle>Permanent White Tips</MenuTitle>
                  <MenuDetail>Gel</MenuDetail>
                </div>
                <MenuPriceDetail class="col-sm-4">
                  <MenuPrice>$40</MenuPrice>
                  <MenuLabel>Adults Only</MenuLabel>
                </MenuPriceDetail>
              </div>
            </Menu>
  


          </div>
  
          <div class="col-sm-6">
  
            <Menu>
              <div class="row">
                <div class="col-sm-8">
                  <MenuTitle>French Polish</MenuTitle>
                  <MenuDetail>Ordinary Polish</MenuDetail>
                </div>
                <MenuPriceDetail class="col-sm-4">
                  <MenuPrice>$14.5</MenuPrice>
                </MenuPriceDetail>
              </div>
            </Menu>
  
            <Menu>
              <div class="row">
                <div class="col-sm-8">
                  <MenuTitle>Nails Art</MenuTitle>
                  <MenuDetail>Full Hand</MenuDetail>
                </div>
                <MenuPriceDetail class="col-sm-4 ">
                  <MenuPrice>$15</MenuPrice>
                </MenuPriceDetail>
              </div>
            </Menu>
            <Menu>
              <div class="row">
                <div class="col-sm-8">
                  <MenuTitle>Acrylic Nails</MenuTitle>
                  <MenuDetail>Full Set</MenuDetail>
                </div>
                <MenuPriceDetail class="col-sm-4">
                  <MenuPrice>$10+</MenuPrice>
                  
                </MenuPriceDetail>
              </div>
            </Menu>
  
           
  
            
            <Menu>
              <div class="row">
                <div class="col-sm-8">
                  <MenuTitle>Permanent White Tips</MenuTitle>
                  <MenuDetail>Acrylic</MenuDetail>
                </div>
                <MenuPriceDetail class="col-sm-4">
                  <MenuPrice>$23</MenuPrice>
                  <MenuLabel>Adults Only</MenuLabel>
                </MenuPriceDetail>
              </div>
            </Menu>

            
            <Menu>
              <div class="row">
                <div class="col-sm-8">
                  <MenuTitle>Acrylic Take Off</MenuTitle>
                  <MenuDetail>+ Manicure with Polish</MenuDetail>
                </div>
                <MenuPriceDetail class="col-sm-4">
                  <MenuPrice>$10</MenuPrice>
                
                </MenuPriceDetail>
              </div>
            </Menu>


            <Menu>
              <div class="row">
                <div class="col-sm-8">
                  <MenuTitle>Nail Repair</MenuTitle>
                  <MenuDetail>All cases, per finger</MenuDetail>
                </div>
                <MenuPriceDetail class="col-sm-4">
                  <MenuPrice>$4</MenuPrice>
                
                </MenuPriceDetail>
              </div>
            </Menu>

            <Menu>
              <div class="row">
                <div class="col-sm-8">
                  <MenuTitle>Kid Manicure</MenuTitle>
                  <MenuDetail>Polish with vitamins</MenuDetail>
                </div>
                <MenuPriceDetail class="col-sm-4">
                  <MenuPrice>$10</MenuPrice>
                
                </MenuPriceDetail>
              </div>
            </Menu>

          </div>
  
        </div>
  
       
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
            <div class="devider">
            </div>
          </div>
        </div>
  
      </div>
    </PriceSection>
    )
}

export default Price

const PriceSection = styled.section`
	max-width: 100rem;
	margin: 0 auto;
	padding: 0 2rem 2rem;
  min-height: 100vh;
padding-bottom: 4rem;
position: relative;`

const Heading = styled.div`
font-family: "Montserrat", Arial, sans-serif;
	font-size: 4rem;
	font-weight: 500;
	line-height: 1.5;
	text-align: center;
	padding: 3.5rem 0;
	color: #1a1a1a;
  `
const Menu = styled.div`
	border-bottom: 1px dotted #DDD;
	padding: 0 0 10px;
	margin: 0 0 20px;`
  
const MenuTitle = styled.h4`
font-size: 16px;
	margin: 0;
  
  @media (max-width: 767px) {

  text-align: center;
}`

const ModuleTitle = styled.h2`
	font-size: 48px;
	margin: 0 0 18px;
  font-size: 50px;
  font-family: 'Shrikhand', cursive;
  font-weight: 400;`
const MenuPrice = styled.h4`
font-size: 16px;
	margin: 0;
`
const ModuleSubtitle = styled.h3`
font-size: 40px;

font-family: 'Ribeye Marrow', cursive;
	text-transform: uppercase;
  text-transform: uppercase;
	letter-spacing: 2px;
    font-size: 20px;
	color: #a7a9ac;
	margin: 0;`

const MenuDetail = styled.div`
	font-size: 14px;
  
  @media (max-width: 767px) {

  text-align: center;
}`

const MenuPriceDetail = styled.div`
	position: relative;
	text-align: left;
  
  @media (max-width: 767px) {

  text-align: left;
}`
  
  const MenuLabel = styled.div`
  	background: #fae7d7;
	position: relative;
	
	padding: 2px 10px 0px 10px;
  font-family: 'Fanwood Text', serif;
	letter-spacing: 1px;
	font-style: italic;
	font-size: 15px;
	float: right;
	top: 5px;

  @media (max-width: 767px) {

  float: none;}
  `