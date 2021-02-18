import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
const NavItem = styled(Link)`
  text-decoration: none;
  color: #000;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #FA585A;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #FA585A;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    color: #111;
  }
`

const NavAcnhor = styled(AnchorLink)`
 text-decoration: none;
  color: #000;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #FA585A;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #FA585A;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    color: #111;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/about">About</NavItem>
      <NavAcnhor
    to="/#pricelist"
    title="Price"
    className="stripped"
    stripHash
  />
      <NavItem to="/contacts">Contact</NavItem>
    </>
  )
}

export default NavbarLinks