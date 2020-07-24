import React from "react";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import {graphql, useStaticQuery} from "gatsby";
import {ArrowDown} from "./specials/svgs";
import Fade from 'react-reveal/Fade';




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

  
  }
  
`

const IntroText = styled.div`

  max-width: 40vw;
  h1 {
    font-size: 48px;
    font-weight: 400;
    margin: 10px 0px;
  }
  
  h2 {
    font-family: 'Gloria Hallelujah';
    font-size: 28px;
    color: #3399FF;
    margin: 10px 0px;
  }
  
  p {
  font-size: 18px;
  line-height: 25px;
  
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
            gustaf: file(relativePath: { eq: "images/gustaf_blue.png" }) {childImageSharp {fixed(width: 360, height: 418, quality: 95) {...GatsbyImageSharpFixed_tracedSVG}}}
        }
    `)

    return (
        <Container>
            <ImageAndText>

                <IntroText>
                    <Fade bottom>
                    <h1>I'm Gustaf Halvardsson.</h1>
                    <h2>Computer Science Student @KTH.</h2>
                    <p>Best described by my curiosity for new areas and technologies which is why I’ve done everything from Machine Learning to Animations with mainly technology start-ups as clients.</p>
                    </Fade>
                    </IntroText>
                <Fade right>
                <Img fixed={data.gustaf.childImageSharp.fixed} alt="gustaf"/>
                </Fade>
            </ImageAndText>
            <ScrollDown>
                <Fade bottom>
                <p>Scroll down</p>
                <p><ArrowDown/></p>
                </Fade>
            </ScrollDown>
        </Container>


    )}

