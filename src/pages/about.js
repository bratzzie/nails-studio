import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AHome from "../components/AboutUs/AHome"
import Team from "../components/AboutUs/Team"
import Info from "../components/AboutUs/Info"
import MoreInfo from "../components/AboutUs/MoreInfo"


const About = () => (
  <Layout>
    <SEO title="Page About Nails Studio" />
   <AHome/>
   <Info/>
   <Team/>
  <MoreInfo/>
     </Layout>
)

export default About
