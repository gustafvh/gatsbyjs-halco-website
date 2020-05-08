import React, {useState} from "react"

import "normalize.css"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Footer from "../components/Footer"
import Panes from "../components/Panes"
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import {ArrowLeft, ArrowRight} from "../components/specials/svgs";

const GlobalStyles = styled.div`
  font-family: 'Avenir';
  color: #333;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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

const Logo = styled.div`
  justify-content: center;
  padding: 40px;
  text-align: center;
`

const PaneContainer = styled.div`
    max-height: 90vh;
    overflow-y: auto;
`

export default function Home() {

    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "images/logo.png" }) {childImageSharp {fixed(width: 150, height: 50) {...GatsbyImageSharpFixed}}}
        }
    `)

    const [bgcolor, setBgcolor] = useState('#F8CE69');

    const bgColorSelector = ['#F8CE69', '#CFA0DC', '#88CF8F', '#FEADBB']

    const [paneSelector, setPane] = useState(1);

    const changePane = (numberToAdd) => {
        setPane(paneSelector+numberToAdd)
        setBgcolor(bgColorSelector[Math.abs(paneSelector % bgColorSelector.length)])
    }

    return (
        <GlobalStyles>
            <PageContainer style={{backgroundColor: bgcolor}}>
                <Logo><Img fixed={data.logo.childImageSharp.fixed} alt="Logo"/>
                </Logo>
                <button style={{left: "40px"}} onClick={() => changePane(-1) }><ArrowLeft/></button>
                    <PaneContainer><Panes paneSelector={paneSelector}/></PaneContainer>
                <button style={{right: "40px"}} onClick={() => changePane(1)}><ArrowRight/></button>
                <Footer/>
            </PageContainer>
        </GlobalStyles>)}
