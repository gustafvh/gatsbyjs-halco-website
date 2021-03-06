import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { ArrowRight } from "./utils/svgs"
import Fade from "react-reveal/Fade"

const Container = styled.div(
  props => `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px;
  a {
    color: unset;
    text-decoration: unset;
   }
  
  .cardBackground {
    display: flex;
    flex-direction: row;
    flex-wrap:  wrap;
    justify-content: space-around;
    border-radius: 25px;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    margin: 40px;
    @media screen and (max-width:450px) { 
    margin: 5px;
    box-shadow: unset;
    border-radius: unset;
    color: unset;
    }
    
    
    
    transition: all 0.2s ease;
    cursor: pointer;
    
    
    &:hover {
    
    a {
        transform: translateX(-10px);
        transition: all 0.2s ease;
        }
    
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    transition: all 0.8s ease;
    
    
    
    .projectImage {
    
    transform: scale(1.2);
    transition: transform 5s;
    }
    
    }
  
  
  }
 
`
)

const Image = styled.div(
  props => `
    max-width: 300px;
max-height: 300px;

overflow: hidden;

.projectImage {
transition: transform 1.5s;
}
  

`
)

const Text = styled.div(
  props => `
    padding: 20px 20px;
    max-width: 260px;
    max-height: 300px;
   
    h4 {
    font-weight: bold;
    font-size: 0.8em;
    margin: 5px 0px;

    }
    
    h2 {
    font-family: 'IBM Plex Mono';
    font-size: 1.5em;
    margin: 10px 0px;
    }
    
    p {
    font-size: 0.9em;
    line-height: 19px;
    margin: 20px 0px;

    }
    
    h3 {
    font-weight: bold;
    font-size: 0.9em;
    margin: 10px;
    }
    
    
`
)
const ViewProject = styled.div(
  props => ` 
    text-align: right;
    margin: 20px 0px;
    margin-bottom: 0px;

    a {
        font-weight: bold;
        font-size: 1em;
        color: #3399FF;
        text-decoration: none;
        display: inline-block;
        transition: all 0.2s ease;       
 
  }
  
    
`
)

const Tools = styled.div(
  props => `
    border: 1px solid #3399FF;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 0px 10px;
    text-align: center;
    

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

const ProjectCard = props => (
  <a
    className="cardBackground"
    target="_blank"
    rel="noopener noreferrer"
    href={props.link}
  >
    <Image>
      <Img
        className="projectImage"
        fixed={props.image.childImageSharp.fixed}
        alt="gustaf"
      />
    </Image>
    <Text>
      <h4>{props.projectType}</h4>
      <h2>{props.name} </h2>
      <p>{props.text} </p>
      <Tools>
        <h3>{props.toolsUsed} </h3>
      </Tools>
      <ViewProject>
        <a href={props.link}>
          View Project <ArrowRight color="#3399FF" />{" "}
        </a>
      </ViewProject>
    </Text>
  </a>
)

export default function Menu(props) {
  const data = useStaticQuery(graphql`
    query {
      sign: file(relativePath: { eq: "images/projects/project_sign.png" }) {
        childImageSharp {
          fixed(width: 400, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      apartment: file(
        relativePath: { eq: "images/projects/project_apartment_pred.png" }
      ) {
        childImageSharp {
          fixed(width: 400, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      footprint: file(
        relativePath: { eq: "images/projects/project_footprint.png" }
      ) {
        childImageSharp {
          fixed(width: 400, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      gira: file(relativePath: { eq: "images/projects/project_gira.png" }) {
        childImageSharp {
          fixed(width: 400, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      flappy: file(
        relativePath: { eq: "images/projects/projects_flappy.png" }
      ) {
        childImageSharp {
          fixed(width: 400, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      doppel: file(
        relativePath: { eq: "images/projects/project_doppelganger.png" }
      ) {
        childImageSharp {
          fixed(width: 400, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Fade up>
        <SectionText>
          <h2 id="projects">Projects I've done</h2>
          <h4>Click the cards to read more</h4>
        </SectionText>
      </Fade>
      <Container>
        <Fade up>
          <ProjectCard
            image={data.sign}
            projectType="PUBLICATION + APP"
            name="Neural Network Interpreter"
            text="Predicting Swedish Sign Language Signs using ML, CNN, and
                         Transfer Learning."
            toolsUsed="Python • Tensorflow • Docker"
            link="https://github.com/gustafvh/SignInterpreterSSL"
          />
          <ProjectCard
            image={data.apartment}
            projectType="CASE STUDY + ARTICLE"
            name="Apartment Price Predictor"
            text="Data Science case-study on Stockholm Apartments + published Medium Article."
            toolsUsed="Numpy • Matplot • Selenium"
            link="https://towardsdatascience.com/a-data-science-approach-to-stockholms-apartment-prices-part-2-13e51772b528"
          />
          <ProjectCard
            image={data.footprint}
            projectType="CONCEPT"
            name="Environment Gamification"
            text="Gamification of environmental thinking in an iOS app with challenges and rewards."
            toolsUsed="Sketch • Photoshop • Invision"
            link="https://dribbble.com/shots/5754630-Footprint-Environmental-gamification-app"
          />
          <ProjectCard
            image={data.gira}
            projectType="WEB-BASED GAME"
            name="Gira The Explorer Game"
            text="Interactive exploration game based on Maps API that tests your geography skills."
            toolsUsed="React • APIs • Firebase"
            link="https://github.com/team-datagram-rocket/Gira-the-explorer"
          />
          <ProjectCard
            image={data.doppel}
            projectType="APP PROJECT"
            name="Find My Doppelganger"
            text="Reverse image search React App for finding look-alikes on the web written from scratch."
            toolsUsed="React • Webpack • Javascript"
            link="https://github.com/team-datagram-rocket/Gira-the-explorer"
          />
          <ProjectCard
            image={data.flappy}
            projectType="8-bit Game"
            name="Flappy Taco Retro Game"
            text="A 2D Flappy Bird game that was written in C and Assembler directly on a PIC32-processor."
            toolsUsed="C • Assembler • I/O"
            link="https://github.com/gustafvh/Flappy-Taco-Pic32"
          />
        </Fade>
      </Container>
    </>
  )
}
