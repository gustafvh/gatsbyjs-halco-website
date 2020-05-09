import React from "react"
import styled from "@emotion/styled"
import { hexToRGBA } from "./specials/supportFunctions.js"

const Container = styled.div(props =>`
  position: fixed;
  bottom: 0px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: linear-gradient(to bottom, ${props.bgColorFrom}, 20%, ${props.bgColorTo});
  transition: all 1s ease;
`)


const MenuOptionStyle = styled.div`
  padding: 80px 40px;
  
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

export default function Footer(props) {
    return (
        <Container bgColorFrom={hexToRGBA(props.bgcolor, 0)} bgColorTo={hexToRGBA(props.bgcolor, 100)}>
            <MenuOption option="Profile"/>
            <MenuOption option="Clients"/>
            <MenuOption option="Work"/>
            <MenuOption option="Project"/>
        </Container>)}

