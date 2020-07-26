import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { ArrowDown } from "./specials/svgs"
import Fade from "react-reveal/Fade"
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
  
  h1 {
    font-size: 3em;
    font-weight: 400;
  }
  
  img {
  
  text-align: center;
  
`

const IntroText = styled.div`
  max-width: 40vw;
  min-width: 400px;

  h1 {
    font-size: 3em;
    font-weight: 400;
    margin: 20px;
  }

  h2 {
    font-family: "Gloria Hallelujah";
    font-size: 1.8em;
    color: #3399ff;
    margin: 20px;
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
    font-family: "Gloria Hallelujah";
    font-size: 1.5em;
    margin: 5px 0;
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
`

export default function WelcomeSection() {
  const data = useStaticQuery(graphql`
    query {
      gustaf: file(relativePath: { eq: "images/gustaf-blue.png" }) {
        childImageSharp {
          fixed(width: 360, height: 418, quality: 95) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Container>
      <ImageAndText>
        <IntroText>
          <Fade left>
            <h1>I'm Gustaf Halvardsson.</h1>
            <h2>Computer Science Student @KTH.</h2>
            <p>
              Best described by my curiosity for new areas and technologies
              which is why I’ve done everything from Machine Learning to
              Animations with mainly technology start-ups as clients.
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
          </Fade>
        </IntroText>
        <Fade right>
          <Img fixed={data.gustaf.childImageSharp.fixed} alt="gustaf" />
        </Fade>
      </ImageAndText>
      <ScrollDown>
        <Fade bottom>
          <p>Scroll down</p>
          <p>
            <ArrowDown color="#3E3E3E" />
          </p>
        </Fade>
      </ScrollDown>
    </Container>
  )
}
