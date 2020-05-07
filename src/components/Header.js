import React, {useState} from "react"
import styled from "@emotion/styled"
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import TitlePane from "./TitlePane";
import MouseScrollIcon from "./specials/MouseScrollIcon";


const HeaderContainer = styled.div`
  font-family: 'Avenir';
  color: #333;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  
`
const Logo = styled.div`
  float: left;
  padding: 20px;
`
const Menu = styled.div`
  float: right;
  color: #444444;
  display: flex;
  margin: 20px 40px;
  flex-direction: row;
  justify-content: space-between;
  
`

const MenuOptions = styled.div`
  float: right;
  color: #444444;
  display: flex;
  flex-direction: row;
  
`
const MenuOptionStyle = styled.div`
  font-family: 'Avenir';
  padding: 40px 20px;
  
  a {
    color: #333;
    text-decoration: none;
    display: inline-block;
    transition: all 0.2s ease;
  }
  
  a:hover {
    font-weight: 600;
    color: #3399FF;
    transform: translateY(-3px);
    transition: all 0.2s ease;
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
            file(relativePath: { eq: "images/logo.png" }) {
                childImageSharp {
                    fixed(width: 150, height: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    return (<HeaderContainer style={{backgroundColor: bgcolor}}>
        <Menu>
            <Logo>
                <Img
                    fixed={data.file.childImageSharp.fixed}
                    alt="Logo"
                />
            </Logo>
            <MenuOptions>
                    <MenuOption option="Profile"/>
                    <MenuOption option="Clients"/>
                    <MenuOption option="Work"/>
                    <MenuOption option="Project"/>
            </MenuOptions>
        </Menu>
            <TitlePane bgcolor={bgcolor} setBgcolor={setBgcolor}/>
        <MouseScrollIcon/>
    </HeaderContainer>)}

