import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'

const Link = styled.a`
  box-shadow: none;
  font-size: 20px;
  vertical-align: sub;
  color: grey;
  

  &:hover {
    color: ${props => props.color};
  }
`

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social } = data.site.siteMetadata
      return (
        <div
          style={{
            display: `flex`,
            marginBottom: rhythm(2.5),
          }}
        >
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
              borderRadius: `100%`,
            }}
          />
          <p>
            Written by <strong>{author}</strong> who lives and works near Paris (FR).
            {` `}
            <Link
              href={`https://www.linkedin.com/in/${social.linkedin}/`}
              target='_blank'
              color='#0077B5'
            >
              <IoLogoLinkedin />
            </Link>
            {` `}
            <Link
              href={`https://github.com/${social.github}/`}
              target='_blank'
              color='#333'
            >
              <IoLogoGithub />
            </Link>
          </p>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/rdbmax-avatar.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          linkedin,
          github
        }
      }
    }
  }
`

export default Bio
