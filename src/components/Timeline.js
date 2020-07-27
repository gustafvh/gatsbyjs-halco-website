import React, { useState } from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import { ArrowRight } from "./specials/svgs"

const Container = styled.div(
  props => `
`
)

const SectionText = styled.div(
  props => `
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px;
  
  

h2 {
  font-size: 2.5em;
  font-weight: 400;
  margin: 10px 0px;
  }
  
h4 {
font-family: 'IBM Plex Mono';
font-size: 1.1em;
margin: 10px;

}
 
`
)

const CompaniesContainer = styled.div(
  props => `
display: flex;
flex-direction: row;
overflow: auto;

  hr {
  border-left: 6px dashed #D4D4D4;
  transform: rotate(90deg) translateX(100px);
  height: 100px;
  z-index: -10;


  }
  
  .cardBackground {
  
  display: flex;
flex-direction: row;
justify-content: space-between;
background: #FFFFFF;
box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
padding: 40px;
margin: 40px;
margin-top: 20px;
min-width: 500px;
transition: all 0.4s ease;
cursor: pointer;
color: unset;
text-decoration: unset;



&:hover {

box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
transition: all 0.4s ease;

}

@media screen and (max-width:800px) {
    flex-direction: column;
    margin: 20px;
    padding: 40px;
    min-width: 60vw;
    justify-content: unset;
    }
  
  
  
  }


&::-webkit-scrollbar-track
{
    background-color: #F5F5F5;
    border-radius: 30px;
    margin: 25%;
    
}

&::-webkit-scrollbar
{
    background-color: none;
    width: 100px;
    
    
}

&::-webkit-scrollbar-thumb
{
    background-color: #3E3E3E;
    opacity: 1;
    border-radius: 30px;
}
`
)

const LogoAndText = styled.div(
  props => `
  min-width: 120px;
h1  {
font-size: 1.5em;
font-family: 'IBM Plex Mono';
}

h3 {
color: #C4C4C4;
font-size: 0.8em;

}

img {
  min-height: 20px;
}
`
)

const InfoText = styled.div(
  props => `
`
)

const ReadMore = styled.div(
  props => `
    
    margin-top: 10px;
    
    p {
    color: #3399FF;
    font-size: 1em;
    font-weight: 700;
    text-decoration: none;
    display: inline-block;
    transition: all 0.2s ease;
    margin: 5px 0px;

    
    &:hover {
      display: inline-block;
      transform: translateX(-3px);
      transition: all 0.2s ease;
    }
    }


`
)

const Headline = styled.div(
  props => `
    font-weight: 700;
    color: #3399FF;
    p {
    margin-top: 0px;
`
)

const VerticalSeperator = styled.span(
  props => `
    border-left: 1px solid #C4C4C4;
    border-radius: 20px;
    height: 100%;
    margin: 0px 20px;
    
    @media screen and (max-width:800px) {
    display: none;
    }
`
)

const AllSkillsContainer = styled.div(
  props => `
    text-align: center;
    
    h2 {
    font-size: 1.2em;
    font-weight: 400;
    }
    
`
)

const SkillBackground = styled.div(
  props => `
    background: ${props.color};
    border-radius: 20px;
    margin: 5px;
    transition: all 0.8s ease;
  
   p {
    font-size:  1em;
    margin: 20px 20px;
    color: ${
      props.color === "#043E78" ||
      props.color === "#3399FF" ||
      props.color === "#3399FF"
        ? "#ffffff"
        : "inherit"
    };
   } 
   
   ${
     props.skillsSelected.includes(props.skillId)
       ? "box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);" +
         "transition: all 0.8s ease;"
       : props.skillsSelected.length > 0
       ? "background: #F5F5F5;" + "p {color: #3e3e3e;}"
       : ""
   }
  
    
`
)

const Skills = styled.div(
  props => `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    
    
`
)
const TimeScaleContainer = styled.div(
  props => `
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 10px 25%;
    
    p {
    margin: 10px 10px;
    }
    
    
    
`
)

const CompanyCard = props => (
  <a
    className="cardBackground"
    target="_blank"
    href={props.link}
    onMouseEnter={() => {
      props.setSkillsSelected([])
      props.setSkillsSelected(
        props.skillsSelected.concat(props.skillsToHighlight)
      )
    }}
    onMouseLeave={() => {
      props.setSkillsSelected([])
    }}
  >
    <LogoAndText>
      <Img fixed={props.logo.childImageSharp.fixed} alt={props.link} />
      <h1>{props.role} </h1>
      <h3>{props.dates} </h3>
      <ReadMore>
        <p href={props.link}>
          Read more <ArrowRight color="#3399FF" />
        </p>
      </ReadMore>
    </LogoAndText>
    <VerticalSeperator></VerticalSeperator>
    <InfoText>
      <Headline>
        <p>{props.headline} </p>
      </Headline>
      <ul>
        <li>
          <p>{props.pointOne} </p>
        </li>
        <li>
          <p>{props.pointTwo} </p>
        </li>
      </ul>
    </InfoText>
  </a>
)

const SingleSkill = props => (
  <SkillBackground
    color={props.color}
    skillId={props.skillId}
    skillsSelected={props.skillsSelected}
  >
    <p>{props.skill}</p>
  </SkillBackground>
)

const SoftSkills = props => (
  <AllSkillsContainer>
    {/*<h2>Skills I’ve learned</h2>*/}
    <Skills>
      <SingleSkill
        skillId={1}
        skillsSelected={props.skillsSelected}
        skill="Business Development"
        color="#3399FF"
      />
      <SingleSkill
        skillId={2}
        skillsSelected={props.skillsSelected}
        skill="Front End Development"
        color="#043E78"
      />
      <SingleSkill
        skillId={3}
        skillsSelected={props.skillsSelected}
        skill="Machine Learning"
        color="#8EC7FF"
      />
      <SingleSkill
        skillId={4}
        skillsSelected={props.skillsSelected}
        skill="Data Science"
        color="#E1F0FF"
      />
      <SingleSkill
        skillId={5}
        skillsSelected={props.skillsSelected}
        skill="Back End Development"
        color="#8EC7FF"
      />
      <SingleSkill
        skillId={6}
        skillsSelected={props.skillsSelected}
        skill="UX"
        color="#8EC7FF"
      />
    </Skills>
  </AllSkillsContainer>
)

const TechSkills = props => (
  <AllSkillsContainer>
    {/*<h2>Skills I’ve learned</h2>*/}
    <Skills>
      <SingleSkill
        skillId={7}
        skillsSelected={props.skillsSelected}
        skill="React/Javascript"
        color="#043E78"
      />
      <SingleSkill
        skillId={8}
        skillsSelected={props.skillsSelected}
        skill="Java/Kotlin"
        color="#8EC7FF"
      />
      <SingleSkill
        skillId={9}
        skillsSelected={props.skillsSelected}
        skill="Python"
        color="#8EC7FF"
      />
      <SingleSkill
        skillId={10}
        skillsSelected={props.skillsSelected}
        skill="HTML/CSS"
        color="#3399FF"
      />
      <SingleSkill
        skillId={11}
        skillsSelected={props.skillsSelected}
        skill="Wordpress"
        color="#8EC7FF"
      />
    </Skills>
  </AllSkillsContainer>
)

const TimeScale = props => (
  <TimeScaleContainer>
    <p>August 2016</p>
    <p>Oct 2017</p>
    <p>March 2018</p>
    <p>June 2019</p>
    <p>Today</p>
  </TimeScaleContainer>
)

export default function Timeline(props) {
  const data = useStaticQuery(graphql`
    query {
      benify: file(
        relativePath: { eq: "images/company-logos/benify-logo.png" }
      ) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      reused: file(
        relativePath: { eq: "images/company-logos/reused-logo.png" }
      ) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      asthmatuner: file(
        relativePath: { eq: "images/company-logos/asthmatuner-logo.png" }
      ) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      accenture: file(
        relativePath: { eq: "images/company-logos/accenture-logo.png" }
      ) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      prevas: file(
        relativePath: { eq: "images/company-logos/prevas-logo.png" }
      ) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      hedvig: file(
        relativePath: { eq: "images/company-logos/hedvig-logo.png" }
      ) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const [skillsSelected, setSkillsSelected] = useState([])

  return (
    <Container>
      <Fade up>
        <SectionText>
          <h2 id="timeline">My Timeline</h2>
          <h4>
            Scroll right to see more <ArrowRight color="#3E3E3E" />
          </h4>
        </SectionText>
        <SoftSkills skillsSelected={skillsSelected} />
        <TechSkills skillsSelected={skillsSelected} />
        <CompaniesContainer>
          <CompanyCard
            role="Data Analyst"
            dates="AUG 2016 - JUN 2018"
            logo={data.benify}
            headline="HR-tech company which creates cloud-based benefits portals for employers."
            pointOne="Providing development strategies based on data from 1+ million users globally."
            pointTwo="Developed and lead supplier-agreement system."
            link="https://benify.se"
            skillsToHighlight={[1, 2, 4, 5, 6, 10]}
            skillsSelected={skillsSelected}
            setSkillsSelected={setSkillsSelected}
          />
          <hr />
          <CompanyCard
            role="Web Developer"
            dates="OCT 2017 - MAR 2018"
            logo={data.reused}
            headline="Sustainable Consumerism company that sells reusable fabric bags that are currently sold online as well as at Systembolaget, ICA and Lidl."
            pointOne="Built HTML/CSS/WP website "
            pointTwo="Built B2C webshop in WooCommerce"
            link="https://reusedremade.com"
            skillsToHighlight={[2, 10, 11]}
            skillsSelected={skillsSelected}
            setSkillsSelected={setSkillsSelected}
          />
          <hr />
          <CompanyCard
            role="Software Developer"
            dates="MAR 2018 - DEC 2019"
            logo={data.asthmatuner}
            headline="Medtech company that develops self-management systems and home diagnostics for respiratory diseases."
            pointOne="Develop doctor-patient interaction platform in Angular."
            pointTwo="Built two HTML/CSS/WP websites"
            link="https://asthmatuner.se"
            skillsToHighlight={[2, 5, 6, 7, 8, 10, 11]}
            skillsSelected={skillsSelected}
            setSkillsSelected={setSkillsSelected}
          />
          <hr />
          <CompanyCard
            role="Business Internship"
            dates="JUN 2019 - SEP 2019"
            logo={data.accenture}
            headline="Global management and technology consulting company."
            pointOne="Data analysis and process automation for client within retail."
            pointTwo="Proof of Concept and MVP for AR-app in Unity."
            link="https.//accenture.com"
            skillsToHighlight={[1, 2, 4, 7]}
            skillsSelected={skillsSelected}
            setSkillsSelected={setSkillsSelected}
          />
          <hr />
          <CompanyCard
            role="Bachelor Thesis"
            dates="MAR 2020 - JUN 2019"
            logo={data.prevas}
            headline="Medtech consulting company focused on mainly product development for the healthcare industry"
            pointOne="Developed sign interpretation application to assist people with hearing disabilities."
            pointTwo="Built application with separated front- and backend in React, Tensorflow and Python."
            link="https.//prevas.se"
            skillsToHighlight={[2, 3, 4, 5, 6, 8]}
            skillsSelected={skillsSelected}
            setSkillsSelected={setSkillsSelected}
          />
          <hr />
          <CompanyCard
            role="Developer Intern"
            dates="FEB 2020 - ONGOING"
            logo={data.hedvig}
            headline="Insurtech company named one of the 100 best startups in Europe by Wired."
            pointOne="Develop and automate internal platform frontend in React."
            pointTwo="Improve backend architecture and speed in Kotlin."
            link="https.//hedvig.com"
            skillsToHighlight={[2, 5, 7, 8]}
            skillsSelected={skillsSelected}
            setSkillsSelected={setSkillsSelected}
          />
        </CompaniesContainer>
        <TimeScale />
      </Fade>
    </Container>
  )
}
