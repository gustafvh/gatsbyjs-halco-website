import React from "react"
import styled from "@emotion/styled"
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import {ArrowRight} from "./specials/svgs";
import Fade from "react-reveal/Fade";


const Container = styled.div(props =>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 40px;
 
`)

const CardBackground = styled.div(props =>`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 25px;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    margin: 20px;
    max-height: 300px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
    
    transform: translateY(-8px);
    transition: all 0.2s ease;
    
    a {
        transform: translateX(-10px);
        transition: all 0.2s ease;
    }
    
    .projectImage {
    
    transform: scale(1.2);
    transition: transform 5s;
    }
    
    }
    
    
`)

const Image = styled.div(props =>`
max-width: 300px;
overflow: hidden;

.projectImage {
transition: transform 1.5s;
}
  

`)

const Text = styled.div(props =>`
    padding: 20px;
    max-width: 20vw;
    
    h4 {
    font-weight: bold;
    font-size: 0.9em;
    }
    
    h2 {
    font-family: Gloria Hallelujah;
    font-size: 1.6em;
    margin: 10px 0px;
    }
    
    p {
    font-size: 0.9em;
    line-height: 19px;
    }
    
    h3 {
    font-weight: bold;
    font-size: 0.9em;
    margin: 10px;
    }
    
    
`)
const ViewProject = styled.div(props =>` 
    text-align: right;
    margin: 20px 0px;
    a {
        font-weight: bold;
        font-size: 1em;
        color: #3399FF;
        text-decoration: none;
        display: inline-block;
        transition: all 0.2s ease;
 
  }
  
    
`)


const Tools = styled.div(props =>`
    border: 1px solid #3399FF;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 0px 20px;
    text-align: center;
    

`)




const ProjectCard = props => (
    <CardBackground>
        <Image>
            <Img className="projectImage" fixed={props.image.childImageSharp.fixed} alt="gustaf"/>
        </Image>
        <Text>
            <h4>{props.projectType}</h4>
            <h2>{props.name} </h2>
            <p>{props.text} </p>
            <Tools>
                <h3>{props.toolsUsed} </h3>
            </Tools>
            <ViewProject> <a href={props.link}>View Project   <ArrowRight/> </a></ViewProject>
        </Text>

    </CardBackground>
)

export default function Menu(props) {

    const data = useStaticQuery(graphql`
        query {
            sign: file(relativePath: { eq: "images/projects/project_sign.png" }) {childImageSharp {fixed(width: 400, quality: 95) {...GatsbyImageSharpFixed_tracedSVG}}},
            apartment: file(relativePath: { eq: "images/projects/project_apartment_pred.png" }) {childImageSharp {fixed(width: 400, quality: 95) {...GatsbyImageSharpFixed_tracedSVG}}},
            footprint: file(relativePath: { eq: "images/projects/project_footprint.png" }) {childImageSharp {fixed(width: 400, quality: 95) {...GatsbyImageSharpFixed_tracedSVG}}},
            gira: file(relativePath: { eq: "images/projects/project_gira.png" }) {childImageSharp {fixed(width: 400, quality: 95) {...GatsbyImageSharpFixed_tracedSVG}}},
        }
    `)

    return (
        <Container>
            <Fade bottom>
            <ProjectCard image={data.sign}
                         projectType="PUBLICATION + APP"
                         name="Neural Network Interpreter"
                         text="Predicting Swedish Sign Language Signs using ML, CNN and
                         Transfer Learning."
                         toolsUsed="Python • Tensorflow • Docker"
                         link="https://github.com/gustafvh/SignInterpreterSSL"
            />
            <ProjectCard image={data.apartment}
                         projectType="CASE STUDY + ARTICLE"
                         name="Apartment Price Predictor"
                         text="Data Science case-study on Stockholm Apartment Pricing + published Medium Article."
                         toolsUsed="Numpy • Matplot • Selenium"
                         link="https://towardsdatascience.com/a-data-science-approach-to-stockholms-apartment-prices-part-2-13e51772b528"
            />
            <ProjectCard image={data.footprint}
                         projectType="CONCEPT"
                         name="Environment Gamification"
                         text="Gamification of environmental thinking in iOS app with challenges and rewards."
                         toolsUsed="Sketch • Photoshop • Invision"
                         link="https://dribbble.com/shots/5754630-Footprint-Environmental-gamification-app"
            />
            <ProjectCard image={data.gira}
                         projectType="WEB-BASED GAME"
                         name="Gira The Explorer Game"
                         text="Interactive exploration game based on Google Maps API that tests your geography skills."
                         toolsUsed="React • APIs • Firebase"
                         link="https://github.com/team-datagram-rocket/Gira-the-explorer"
            />
            </Fade>
        </Container>)}

