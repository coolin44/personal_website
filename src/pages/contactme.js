import React from "react"
import Layout from "../components/layout"

const ContactMePage = () => (
  <Layout>
    <div>
    <h1>Contact Me</h1>

    <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
    >
        <input name="name" placeholder="Your Name" type="text"/>
        <button type="submit">Send</button>
    </form>


    </div>

  </Layout>
)

export default ContactMePage;