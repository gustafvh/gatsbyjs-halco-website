import React from "react"
import styled from "@emotion/styled"
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import Fade from "react-reveal/Fade";
import {ArrowRight} from "./specials/svgs";



const Container = styled.div(props =>`
justify-content: center;
`)

const SectionText = styled.div(props =>`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  

h2 {
  font-size: 2.5em;
  font-weight: 400;
  margin: 10px 0px;
  }
  
h4 {
font-family: 'Gloria Hallelujah';
font-size: 1.1em;

}
 
`)

const CompaniesContainer = styled.div(props =>`
display: flex;
flex-direction: row;
overflow: auto;

&::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
}

&::-webkit-scrollbar
{
    background-color: red;
}

&::-webkit-scrollbar-thumb
{
    background-color: #000000;
    width: 100px;
}
`)


const Cardbackground = styled.div(props =>`
display: flex;
flex-direction: row;
justify-content: space-between;
background: #FFFFFF;
box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
padding: 40px;
margin: 40px;
min-width: 500px;
`)

const LogoAndText = styled.div(props =>`
h1  {
font-size: 1.5em;
font-family: 'Gloria Hallelujah';
}

h3 {
color: #C4C4C4;
font-size: 0.8em;

}
`)

const InfoText = styled.div(props =>`
`)

const ReadMore = styled.div(props =>`
    
    margin-top: 40px;
    
    a {
    color: #3399FF;
    font-size: 1em;
    text-decoration: none;
    
    }


`)

const Headline = styled.div(props =>`
    font-weight: 700;
    color: #3399FF;
`)

const VerticalSeperator = styled.span(props =>`
    border-left: 1px solid #C4C4C4;
    border-radius: 20px;
    height: 100%;
    margin: 0px 20px;
`)

const AllSkillsContainer = styled.div(props =>`
    text-align: center;
    
    h2 {
    font-size: 1.2em;
    font-weight: 400;
    }
    
`)

const SkillBackground = styled.div(props =>`
    background: #F5F5F5;
    border-radius: 20px;
    margin: 20px 10px;
   
   p {
    font-size:  1em;
    margin: 20px 20px;
   }
    
`)

const Skills = styled.div(props =>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    
`)

const CompanyCard = props => (
    <Cardbackground>
        <LogoAndText>
            <Img className="projectImage" fixed={props.logo.childImageSharp.fixed} alt="gustaf"/>
            <h1>{props.role} </h1>
            <h3>{props.dates} </h3>
            <ReadMore>
                <a href={props.link}>Read more </a>
            </ReadMore>
        </LogoAndText>
        <VerticalSeperator>

        </VerticalSeperator>
        <InfoText>
            <Headline>
                <p>{props.headline} </p>
            </Headline>
            <ul>
            <li><p>{props.pointOne} </p></li>
            <li><p>{props.pointTwo} </p></li>
            </ul>
        </InfoText>
    </Cardbackground>


)

const SingleSkill = props => (
    <SkillBackground>
        <p>{props.skill}</p>
    </SkillBackground>
)

const MySkills = props => (
    <AllSkillsContainer>
        <h2>Skills I’ve learned</h2>
        <Skills>
            <SingleSkill skill="Business Development"/>
            <SingleSkill skill="Front End Development"/>
            <SingleSkill skill="Front End Development"/>
            <SingleSkill skill="Front End Development"/>
            <SingleSkill skill="Front End Development"/>
        </Skills>
    </AllSkillsContainer>
)



export default function Timeline(props) {

    const data = useStaticQuery(graphql`
        query {
            benify: file(relativePath: { eq: "images/company-logos/benify-logo.png" }) {childImageSharp {fixed(height: 20, quality: 95) {...GatsbyImageSharpFixed_tracedSVG}}},
            reused: file(relativePath: { eq: "images/company-logos/reused-logo.png" }) {childImageSharp {fixed(width: 50, quality: 95) {...GatsbyImageSharpFixed_tracedSVG}}},
        }
    `)

    return (
        <Container>
            <SectionText>
                <h2>My Timeline</h2>
                <h4>Swipe right to see more <ArrowRight color="#3E3E3E"/></h4>
            </SectionText>
            <CompaniesContainer>
                <CompanyCard
                    role="Data Analyst"
                    dates="AUG 2016 - JUN 2018"
                    logo={data.benify}
                    headline="HR-tech company which creates cloud-based benefits portals for employers."
                    pointOne="Providing development strategies based on data from 1+ million users globally."
                    pointTwo="Developed and lead supplier-agreement system within 7 countries that made internal processes 2 400 times faster, down-time free, and removed on-boarding requirement for newly hires."
                    link="https.//benify.se"
                />
                <CompanyCard
                    role="Web Developer"
                    dates="OCT 2017 - MAR 2018"
                    logo={data.reused}
                    headline="Sustainable Consumerism company that sells reusable fabric bags that are currently sold online as well as at Systembolaget, ICA and Lidl."
                    pointOne="Built HTML/CSS/WP website "
                    pointTwo="Built B2C webshop in WooCommerce"
                    link="https.//benify.se"
                />
                <CompanyCard
                    role="Web Developer"
                    dates="OCT 2017 - MAR 2018"
                    logo={data.reused}
                    headline="Sustainable Consumerism company that sells reusable fabric bags that are currently sold online as well as at Systembolaget, ICA and Lidl."
                    pointOne="Built HTML/CSS/WP website "
                    pointTwo="Built B2C webshop in WooCommerce"
                    link="https.//benify.se"
                />
                <CompanyCard
                    role="Web Developer"
                    dates="OCT 2017 - MAR 2018"
                    logo={data.reused}
                    headline="Sustainable Consumerism company that sells reusable fabric bags that are currently sold online as well as at Systembolaget, ICA and Lidl."
                    pointOne="Built HTML/CSS/WP website "
                    pointTwo="Built B2C webshop in WooCommerce"
                    link="https.//benify.se"
                />
            </CompaniesContainer>
            <MySkills/>
        </Container>)}

