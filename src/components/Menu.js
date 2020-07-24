import React from "react"
import styled from "@emotion/styled"

const Container = styled.div(props =>`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 1s ease;
`)


const MenuOptionStyle = styled.div`
  padding: 0px 30px;
  
  a {
    color: #333;
    text-decoration: none;
    display: inline-block;
    transition: all 0.1s ease;
  }
  
  a:hover {
    color: #3399FF;
    transform: translateY(-3px);
    transition: all 0.1s ease;
  }
`

const MenuOption = props => (
    <MenuOptionStyle>
        <a href="#">{props.option}</a>
    </MenuOptionStyle>
)

export default function Menu(props) {
    return (
        <Container>
                <MenuOption option="Home"/>
                <MenuOption option="Work"/>
                <MenuOption option="Roles"/>
                <MenuOption option="Articles"/>
        </Container>)}

