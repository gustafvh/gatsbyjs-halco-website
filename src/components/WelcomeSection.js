import React from "react";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import {graphql, useStaticQuery} from "gatsby";
import {ArrowDown} from "./specials/svgs";



const Container = styled.div`
display: flex;
flex-direction: column;

`

const ImageAndText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 500px;
  
  h1 {
    font-size: 48px;
    font-weight: 400;
    letter-spacing: -0.05em;

  
  }
  
`

const IntroText = styled.div`

  max-width: 40vw;
  h1 {
    font-size: 48px;
    font-weight: 400;
    letter-spacing: -0.05em;
    margin: 10px 0px;
  }
  
  h2 {
    font-family: 'Gloria Hallelujah';
    font-size: 28px;
    letter-spacing: -0.05em;
    color: #3399FF;
    margin: 10px 0px;
  }
  
  p {
  
  }
  
`

const ScrollDown = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    
    p {
        font-family: 'Gloria Hallelujah';
        font-size: 24px;
        margin: 5px 0;
    }
    

`



export default function WelcomeSection() {

    const data = useStaticQuery(graphql`
        query {
            gustaf: file(relativePath: { eq: "images/gustaf_blue.png" }) {childImageSharp {fixed(width: 360, height: 418) {...GatsbyImageSharpFixed}}}
        }
    `)

    return (
        <Container>
            <ImageAndText>
                <IntroText>
                    <h1>I'm Gustaf Halvardsson.</h1>
                    <h2>Computer Science Student @KTH.</h2>
                    <p>Best described by my curiosity for new areas and technologies. which is why I’ve done everything from Machine Learning to Animations with mainly technology start-ups as clients.</p>
                </IntroText>
                <Img fixed={data.gustaf.childImageSharp.fixed} alt="Logo"/>
            </ImageAndText>
            <ScrollDown>
                <p>Scroll down</p>
                <p><ArrowDown/></p>
            </ScrollDown>
        </Container>


    )}

