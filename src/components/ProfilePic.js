import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './pic.css'
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const ProfilePic = (props) => (
    <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "keegan-icon2.jpeg" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img className="borderRadius" style={{borderRadius: "150px", border: "3px solid #EFC93E"}} fixed={data.placeholderImage.childImageSharp.fixed}/>}
    />
)

export default ProfilePic
