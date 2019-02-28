import React from 'react'
import { Link } from "gatsby"
import { graphql } from 'gatsby';
import Layout from "../components/layout"

const ProjectsPage = ({data}) => (
    <Layout>
    <div>
      <h1>Projects</h1>
      {data.allMarkdownRemark.edges.map(post => (
          <div key={ post.node.id }>
            <h3>{post.node.frontmatter.title}</h3>
            <small>Created by {post.node.frontmatter.author} in {post.node.frontmatter.date}</small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <hr />
          </div>
      ))}
    </div>
    </Layout>
  )
    export const pageQuery = graphql`
        query BlogIndexQuery {
                allMarkdownRemark{
                  edges {
                    node {
                        id
                      frontmatter {
                        path
                        title
                        date
                        author
                      }
                    }
                  }
                }
            }
        `


  export default ProjectsPage;