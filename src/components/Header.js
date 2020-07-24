import React from "react";
import Img from "gatsby-image";
import Menu from "./Menu";
import styled from "@emotion/styled";
import {graphql, useStaticQuery} from "gatsby";
import Fade from "react-reveal/Fade";

const HeaderContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: row;
  justify-content: space-between;
  transition: all 1s ease;
  
  button {
        position: fixed;
        top: 50%;
        width: 100px;
        background-color: transparent;
        border-width: 0px;
        cursor: pointer;
        transition: all 0.1s ease;
    }
    
    button:hover {
       transform: translateY(-6px) scale(1.2);
       transition: all 0.2s ease;
    }
    
    button:focus { outline: none; }
`

const Logo = styled.div(props =>`
  text-align: left;  
  transition: all 1s ease;
`)

export default function Header() {

    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "images/logo.png" }) {childImageSharp {fixed(width: 150, height: 50) {...GatsbyImageSharpFixed_tracedSVG}}}
        }
    `)

    return (
        <HeaderContainer>
            <Fade left>
                <Logo>
                    <Img fixed={data.logo.childImageSharp.fixed} alt="Logo"/>
                </Logo>
            </Fade>
            <Fade right>
                <Menu/>
            </Fade>

        </HeaderContainer>

    )}

