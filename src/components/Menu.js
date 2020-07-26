import React from "react"
import styled from "@emotion/styled"

const DesktopContainer = styled.div(
  props => `
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  transition: all 1s ease;
  
  @media screen and (max-width:800px) {
    display: none;
    }
`
)

const MobileContainer = styled.div(
  props => `
  justify-content: center;
  text-align: right;
  background-color: #F5F5F5;
  transition: all 1s ease;
  a {
  margin: 20px;
  }

`
)

const MenuOptionStyle = styled.div`
  padding: 0px 30px;

  a {
    color: #333;
    text-decoration: none;
    display: inline-block;
    transition: all 0.1s ease;

    &:hover {
      color: #3399ff;
      transform: translateY(-3px);
      transition: all 0.1s ease;
    }
  }
`

const MenuOption = props => (
  <MenuOptionStyle>
    <a href={props.link}>{props.option}</a>
  </MenuOptionStyle>
)

const Menu = () => (
  <>
    <MenuOption option="Home" link="#home" />
    <MenuOption option="Timeline" link="#timeline" />
    <MenuOption option="Projects" link="#projects" />
  </>
)

export function MobileMenu() {
  return (
    <MobileContainer>
      <Menu />
    </MobileContainer>
  )
}

export function DesktopMenu() {
  return (
    <DesktopContainer>
      <Menu />
    </DesktopContainer>
  )
}
