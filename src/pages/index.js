import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Home from "../components/Home"
import Insta from "../components/Insta"
import Price from "../components/Price"
import Sale from "../components/Sale"
import InfoProt from "../components/InfoProt"
import FAQ from "../components/FAQ.js"


const IndexPage = () => (

  
  <Layout>
    <SEO title="Homepage" />
    <Home/>
    <Insta/> <Price/><FAQ/><Sale/>
     
   
   <InfoProt
       id= 'about'
       topLine= '4 years in the market, 9 years of the practise'
       headline= 'Nails Salon'
       description= 'Duis luctus augue justo, eget consequat nibh porta id. Suspendisse et arcu ut ipsum ultrices convallis. Integer id vulputate lacus. Nullam tincidunt at nunc id venenatis. Etiam ac tellus ultrices, varius sapien eu, varius massa. Cras rhoncus blandit eros id molestie. Ut odio justo, scelerisque vel dolor nec, tristique venenatis nisi'
    alt='About'
    imgStart= {true}
       ></InfoProt>
   </Layout>
)

export default IndexPage
