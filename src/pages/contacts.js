import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import ContactSection from "../components/Contact/ContactSection"


const ContactPage = () => (
  <Layout>
    <SEO title="Contacts" />
    <ContactSection/>

  </Layout>
)

export default ContactPage
