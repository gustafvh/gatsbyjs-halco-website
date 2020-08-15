import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import { ArrowUp } from "./utils/svgs"

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
  display: flex;
  flex-direction: column;
  flex-basis: content;
  position: absolute;  
  transform: rotate(${props.rotation}deg) translate(${props.marginLeft}, ${props.marginTop});
  
 @media screen and (max-width:450px) { 
 position: inherit; 
 transform: unset;
 }

  padding: 15px;
  padding-bottom: 0px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  background: white;
  transition: all 0.4s ease;
  text-align: center;
  
  p {
  margin: 20px;
  font-family: 'Gloria Hallelujah';
  font-size: 1.2em;
  }
  
  &:hover {
    transition: all 0.4s ease;
    z-index: 10000;
    transform: rotate(0deg) scale(1.2,1.2) translate(${props.marginLeft}, ${props.marginTop});

  }

  `
)

const SectionRow = styled.div(
  props => `
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
  `
)

const Text = styled.div(
  props => `
  display: flex;
  flex-direction: column;
  flex-basis: 600px;
  margin: 20px;
  
  
  
  `
)

const Paragraph = styled.div(
  props => `
  margin: 10px 0px;
  
  p {
  font-size: 1em;
  }
  
  h2 {
  margin: 5px 0px;
  }
  
  `
)

const ImagesContainer = styled.div(
  props => `
  margin: 20px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  flex-wrap: wrap;
  height: 800px;
  flex-basis: 600px;
  
  h3 {
  position: absolute;
  transform: translate(230px, 720px);
  color: #3E3E3E;
  font-family: 'Gloria Hallelujah';
  }
     @media screen and (max-width:450px) { 
  flex-direction: row; 
  overflow: auto;
  height: 700px;
  margin: 0px;
  h3 {display: none; }
  }
  `
)

const Picture = props => (
  <Image
    marginTop={props.marginTop}
    marginLeft={props.marginLeft}
    rotation={props.rotation}
  >
    <Img fixed={props.image.childImageSharp.fixed} alt={props.text} />
    <p>{props.text}</p>
  </Image>
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
      itpanel: file(
        relativePath: { eq: "images/images-about-me/it-panel.jpg" }
      ) {
        childImageSharp {
          fixed(width: 340, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      uber: file(relativePath: { eq: "images/images-about-me/uber.jpg" }) {
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
          <h2 id="aboutme">Three Things About Me</h2>
          <h4>What I'm like as a person</h4>
        </SectionText>
      </Fade>
      <Fade up>
        <SectionRow>
          <ImagesContainer>
            <Picture
              image={data.martinSpotify}
              marginTop="0px"
              marginLeft="-50px"
              rotation="-20"
              text="Entrepreneurship competition "
            />
            <Picture
              image={data.diving}
              marginTop="0px"
              marginLeft="200px"
              rotation="10"
              text="Barrier Reef Diving"
            />
            <Picture
              image={data.lofoten}
              marginTop="250px"
              marginLeft="-80px"
              rotation="-3"
              text="Reinebriggen, Norway"
            />
            <Picture
              image={data.itpanel}
              marginTop="280px"
              marginLeft="250px"
              rotation="10"
              text="Universum Awards 2020"
            />
            <Picture
              image={data.uber}
              marginTop="440px"
              marginLeft="-50px"
              rotation="-5"
              text="Leadership program @Uber "
            />

            <h3>
              Psst. Hover me!
              <ArrowUp />
            </h3>
          </ImagesContainer>
          <Text>
            <Paragraph>
              <h2>Started early </h2>
              <p>
                At age 16 I competed with some friends in a national
                entrepreneurship competition and won silver. This lead me to
                start my own consulting company to make websites for small
                companies which started as rough and simple Wordpress-sites. But
                today 5 years later I make sophisticated web applications and
                other software for tech-start ups.
              </p>
            </Paragraph>
            <Paragraph>
              <h2>Curious on (almost) too much</h2>
              <p>
                I love to learn and explore new things and concepts constantly.
                This has created a large spread in what I know and can do. For
                example, as a kid I used to draw constantly meaning I still love
                to design, animate and sketch. On the other end of the spectrum,
                I also love more binary subjects such as Programming and Machine
                Learning because of what it allows me to do. It is why I enjoy
                fulfilling ideas and concepts in every step of the way, which my
                varied skillset allows me to do very well.
              </p>
            </Paragraph>
            <Paragraph>
              <h2>Building and creating things is what I love</h2>
              <p>
                My varied skillset allows me to do what I love the most, taking
                a product from an idea to finished product and being part of it
                every step of the way. Its the biggest reason why I've worked
                with, and love, entrepreneurship so much. It puts bigger demands
                on me as to what I should be able to do and has required me to
                be more involved in many different departments.
              </p>
            </Paragraph>
          </Text>
        </SectionRow>
      </Fade>
    </Container>
  )
}
