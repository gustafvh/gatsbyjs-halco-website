import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

const Container = styled.div(
  props => `
  display: flex;
  flex-direction: column;


 
`
)

const ContentRow = styled.div(
  props => `
  display: flex;
  justify-content: center;
  
  img {
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
 
`
)

const Image = styled.div(
  props => `
  padding: 10px;
  margin: 20px;
  padding-bottom: 10px;
  
  ${props.toTheLeft ? "transform: rotate(-6deg);" : "transform: rotate(9deg);"} 
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  
  h4 {
  font-family: 'Gloria Hallelujah';
  font-size: 1.3em;
  margin: 20px;
  }
  
`
)

const SectionText = styled.div(
  props => `
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  margin: 40px;
  margin-top: 80px;
  
h2 {
  font-size: 2.5em;
  font-weight: 400;
  margin: 10px 0px;
  }
  
h4 {
font-family: 'IBM Plex Mono';
font-size: 1.1em;
margin: 0px;

}
 
`
)

const Text = styled.div(
  props => `
  max-width: 400px;
  margin: 20px;
  margin-right: 10px;

  
  `
)

export default function AboutMe(props) {
  const data = useStaticQuery(graphql`
    query {
      lofoten: file(
        relativePath: { eq: "images/images-about-me/lofoten.jpg" }
      ) {
        childImageSharp {
          fixed(height: 250, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      martinSpotify: file(
        relativePath: { eq: "images/images-about-me/martin-spotify.jpg" }
      ) {
        childImageSharp {
          fixed(height: 250, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Fade up>
        <SectionText>
          <h2 id="aboutme">A little About Me</h2>
          <h4>Click the cards to read more</h4>
        </SectionText>
      </Fade>
      <ContentRow>
        <Image toTheLeft={true}>
          <Img fixed={data.lofoten.childImageSharp.fixed} alt="gustaf" />
          <h4>Lofoten, Norway</h4>
        </Image>
        <Text>
          <h2>I like places with a view. </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            congue tincidunt turpis quis porttitor. Nunc ultricies neque dui,
            sit amet convallis eros maximus id.
          </p>
          <h2>Can't decide what I enjoy the most.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            congue tincidunt turpis quis porttitor. Nunc ultricies neque dui,
            sit amet convallis eros maximus id.
          </p>
        </Text>
        <Image toTheLeft={false}>
          <Img fixed={data.martinSpotify.childImageSharp.fixed} alt="gustaf" />
          <h4>uF-SM, Stockholm</h4>
        </Image>
      </ContentRow>
    </Container>
  )
}
