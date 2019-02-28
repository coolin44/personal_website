import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactMePage = () => (
  <Layout>
    <div>
    <SEO title="Contact Me" keywords={[`Colin`, `Hubert`, `Engineer`]} />
    <h1>Contact Me</h1>

    <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
    >
        <input name="name" placeholder="Your Name" type="text"/>
        <button>Send</button>
    </form>


    </div>

  </Layout>
)

export default ContactMePage;