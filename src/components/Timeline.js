import React from "react"
import styled from "@emotion/styled"
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import Fade from "react-reveal/Fade";


const Container = styled.div(props =>`
  display: flex;
 
`)

const SectionText = styled.div(props =>`
  display: flex;
  text-align: center;
  font-size: 48px;
 
`)

export default function Timeline(props) {

    const data = useStaticQuery(graphql`
        query {
            sign: file(relativePath: { eq: "images/projects/project_sign.png" }) {childImageSharp {fixed(width: 400, quality: 95) {...GatsbyImageSharpFixed_tracedSVG}}},
            apartment: file(relativePath: { eq: "images/projects/project_apartment_pred.png" }) {childImageSharp {fixed(width: 400, quality: 95) {...GatsbyImageSharpFixed_tracedSVG}}},
        }
    `)

    return (
        <Container>
            <SectionText>
                <h2>My Timeline </h2>
            </SectionText>
        </Container>)}

