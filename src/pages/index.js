import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div>
    <SEO title="Home" keywords={[`Colin`, `Hubert`, `Engineer`]} />
    <h1>About Me</h1>
    <p>Hi! My name is William Colin Hubert, but I go by my middle name <b>Colin</b>. I am a recent college 
    graduate with a Bachelor of Science in <b>Computer Science</b> from Texas State University in San Marcos, Texas.
    I currently live in  <b>West Austin</b> and I am looking for a full-time <b>Software Engineering</b> position.
    Right now I am most comfortable with <b>Java</b> and <b>Javascript</b>, although I have hands on experience with 
    several different languages, and I would prefer to focus primarily on the <b>back-end</b> side of things.
    </p>
    </div>
    <div>
    <p><b>Adress:</b> 6500 Champion Grandview Way, Austin, TX 78750</p>
    <p><b>Email:</b> wcolinhubert@gmail.com</p>
    <p><b>Phone Number:</b> (512)618-2740</p>
    <p><b>GitHub:</b> https://github.com/coolin44</p>
    </div>
    <div style={{ maxWidth: `400px`, marginLeft: `400px`}}>
    <Image />
    </div>

    <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>


  </Layout>
)

export default IndexPage
