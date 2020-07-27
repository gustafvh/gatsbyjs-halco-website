import React, { useState } from "react"
import Img from "gatsby-image"
import { DesktopMenu, MobileMenu } from "./Menu"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { GrMenu, GrClose } from "react-icons/gr"

const Container = styled.div``

const HeaderContainer = styled.div`
  display: flex;
  padding: 20px;
  margin: 20px;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-items: center;
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

  button:focus {
    outline: none;
  }
`

const Logo = styled.div(
  props => `
  text-align: left;  
  transition: all 1s ease;
`
)

const MenuButton = styled.div(
  props => `

    display: none;
@media screen and (max-width:800px) {
    
    display: flex;
    
    }
  
`
)

export default function Header(props) {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fixed(width: 150, height: 50) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const [menuOpen, toggleMenuOpen] = useState(true)

  return (
    <Container>
      <HeaderContainer>
        <Logo>
          <Img fixed={data.logo.childImageSharp.fixed} alt="Logo" />
        </Logo>
        {menuOpen ? (
          <>
            <DesktopMenu />
            <MenuButton>
              <a id="Home" onClick={() => toggleMenuOpen(false)} href="#">
                <GrMenu color="#3E3E3E" size="1.5em" />
              </a>
            </MenuButton>
          </>
        ) : (
          <>
            <MenuButton>
              <a id="Home" onClick={() => toggleMenuOpen(true)} href="#">
                <GrClose color="#3E3E3E" size="1.5em" />
              </a>
            </MenuButton>
          </>
        )}
      </HeaderContainer>
      {!menuOpen && <MobileMenu />}
    </Container>
  )
}
