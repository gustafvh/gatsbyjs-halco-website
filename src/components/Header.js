import React, {useState} from "react"
import styled from "@emotion/styled"
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import TitlePane from "./TitlePane";


const HeaderContainer = styled.div`
  font-family: 'Avenir';
  color: #333;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  transition: all 1s ease;
  
`
const Logo = styled.div`
  display: flex;
  margin: 20px 40px;
  flex-direction: row;
  padding: 20px;
  justify-content: center;
`

const MenuOptions = styled.div`
  color: #444444;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100px;
`
const MenuOptionStyle = styled.div`
  font-family: 'Avenir';
  padding: 40px 20px;
  
  a {
    color: #333;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    transition: all 0.1s ease;
  }
  
  a:hover {
    color: #3399FF;
    transform: translateY(-3px) scale(1.2);
    transition: all 0.1s ease;
  }
`

const MenuOption = props => (
    <MenuOptionStyle>
        <a href="#">{props.option}</a>
    </MenuOptionStyle>
    )


export default function Header() {

    const [bgcolor, setBgcolor] = useState('#F8CE69');

    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "images/logo.png" }) {childImageSharp {fixed(width: 150, height: 50) {...GatsbyImageSharpFixed}}}
            benify: file(relativePath: { eq: "images/showcase/showcase_benify.png" }) {childImageSharp {fixed(width: 150, height: 50) {...GatsbyImageSharpFixed}}}
        }
    `)
    return (<HeaderContainer style={{backgroundColor: bgcolor}}>
            <Logo>
                <Img
                    fixed={data.logo.childImageSharp.fixed}
                    alt="Logo"
                />
            </Logo>
            <TitlePane bgcolor={bgcolor} setBgcolor={setBgcolor}/>
        <MenuOptions>
            <MenuOption option="Profile"/>
            <MenuOption option="Clients"/>
            <MenuOption option="Work"/>
            <MenuOption option="Project"/>
        </MenuOptions>
    </HeaderContainer>)}

