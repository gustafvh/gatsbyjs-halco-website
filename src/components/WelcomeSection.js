import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { ArrowDown } from "./utils/svgs"
import { FaMedium, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageAndText = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  
  h1 {
    font-size: 3em;
    font-weight: 400;
  }
  
  img {
  
  text-align: center;
  max-width: 375px;
  
`

const IntroText = styled.div`
  max-width: 40vw;
  min-width: 375px;

  h1 {
    font-size: 3em;
    font-weight: 400;
    margin: 20px;
  }

  h2 {
    font-family: "IBM Plex Mono";
    font-size: 1.8em;
    color: #3399ff;
    margin: 20px;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  p {
    font-size: 1.1em;
    line-height: 25px;
    margin: 20px;
  }
`

const ScrollDown = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 60px;

  p {
    font-family: "IBM Plex Mono";
    font-size: 1.2em;
    margin: 10px 0;
  }
`

const SocialMediaicons = styled.div`
  display: flex;
  margin: 20px;

  a {
    margin: 20px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: #3399ff;
      transform: translateY(-3px);
      transition: all 0.2s ease;
    }
  }

  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`

export default function WelcomeSection() {
  const data = useStaticQuery(graphql`
    query {
      gustaf: file(relativePath: { eq: "images/gustaf-animated.png" }) {
        childImageSharp {
          fixed(width: 370, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Container>
      <ImageAndText>
        <IntroText>
          <h1>I'm Gustaf Halvardsson.</h1>
          <h2>
            Computer Science & AI Student{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://kth.se">
              @KTH.
            </a>
          </h2>
          <p>
            I'm best described by my curiosity for new areas and technologies
            which have lead me to explore and learn more about everything from
            Machine Learning to Animations with mainly technology start-ups as
            clients.
          </p>
          <SocialMediaicons>
            <a href="https://www.linkedin.com/in/gustafhalvardsson/">
              <FaLinkedin color="#3E3E3E" size="1.5em" />
            </a>
            <a href="https://github.com/gustafvh">
              <FaGithub color="#3E3E3E" size="1.5em" />
            </a>
            <a href="https://medium.com/@gustaf.halvardsson">
              <FaMedium color="#3E3E3E" size="1.5em" />
            </a>
            <a href="https://dribbble.com/gustafvh">
              <FaDribbble color="#3E3E3E" size="1.5em" />
            </a>
          </SocialMediaicons>
        </IntroText>
        <Img fixed={data.gustaf.childImageSharp.fixed} alt="gustaf" />
      </ImageAndText>
      <ScrollDown>
        <p>Scroll down</p>
        <p>
          <ArrowDown color="#3E3E3E" />
        </p>
      </ScrollDown>
    </Container>
  )
}
