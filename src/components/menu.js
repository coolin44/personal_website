import React from 'react'
import Link from 'gatsby-link';

const Menu =  () => (
    <div style = {{
        background: '#f4f4f4',
        paddingTop: '10px'
    }}>
      
      <ul style = {{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-evenly'

      }}>

      <li><Link to = "/">About Me</Link></li>
      <li><Link to = "/education">Education</Link></li>
      <li><Link to = "/skills">Skills</Link></li>
      <li><Link to = "/projects">Projects</Link></li>

      </ul>

    </div>
  )

  export default Menu;