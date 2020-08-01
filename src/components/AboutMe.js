import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import { VennDiagram } from "./utils/svgs"

const Container = styled.div(
  props => `
  display: flex;
  flex-direction: column;
  


 
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

const Image = styled.div(
  props => `
  max-width: 340px;
  max-height: 200px;
  margin: 40px 0px;

overflow: hidden;
border-radius: 15px;

  `
)

const ImageAndText = styled.div(
  props => `
  max-width: 360px;
  margin: 20px;
  letter-spacing: 0;
  line-height: 1.4em;
  `
)

const Text = styled.div(
  props => `
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  
  

  
  `
)

const VennContainer = styled.div(
  props => `
  display: flex;
  justify-content: center;
  margin: 20px;
  align-items: center;

  
  `
)

export default function AboutMe(props) {
  const data = useStaticQuery(graphql`
    query {
      lofoten: file(
        relativePath: { eq: "images/images-about-me/lofoten.jpg" }
      ) {
        childImageSharp {
          fixed(width: 340, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      martinSpotify: file(
        relativePath: { eq: "images/images-about-me/martin-spotify.jpg" }
      ) {
        childImageSharp {
          fixed(width: 340, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      diving: file(relativePath: { eq: "images/images-about-me/diving.jpg" }) {
        childImageSharp {
          fixed(width: 340, quality: 95) {
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

        <Text>
          <ImageAndText>
            <Image>
              <Img
                fixed={data.martinSpotify.childImageSharp.fixed}
                alt="gustaf"
              />
            </Image>
            <h2>Started early </h2>
            <p>
              At age 16 I competed with some friends in a national
              entreprenourship competition and won silver. <br /> <br /> This
              lead me to start my own consulting company to make websites for
              small companies which started as rough and simple Wordpress-sites.
              But today 5 years later I make sophisticated web applications and
              other software in mostly Javascript for tech-start ups.
            </p>
          </ImageAndText>
          <ImageAndText>
            <Image>
              <Img fixed={data.lofoten.childImageSharp.fixed} alt="gustaf" />
            </Image>
            <h2>Curious on (almost) too much</h2>
            <p>
              I love to learn and explore new things and concepts constantly.
              This has created a large spread in what I know and can do. <br />
              <br /> For example, as a kid I used to draw constantly meaning I
              still love to design, animate and sketch. On the other end of the
              spectrum, I also love more binary subjects such as Programming and
              Machine Learning because of what it allows me to do. It is why I
              enjoy fulfilling ideas and concepts in every step of the way,
              which my varied skillset allows me to do very well.
            </p>
          </ImageAndText>

          <ImageAndText>
            <Image>
              <Img fixed={data.diving.childImageSharp.fixed} alt="gustaf" />
            </Image>
            <h2>I like a challenge</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              congue tincidunt turpis quis porttitor. Nunc ultricies neque dui,
              sit amet convallis eros maximus id.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nulla congue tincidunt turpis quis
              porttitor. Nunc ultricies neque dui, sit amet convallis eros
              maximus id.
            </p>
          </ImageAndText>
        </Text>
        {/*<VennContainer>*/}
        {/*  <VennDiagram />*/}
        {/*</VennContainer>*/}
      </Fade>
    </Container>
  )
}
