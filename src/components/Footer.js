import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { jsx, css } from '@emotion/core'

const Container = styled.div`
  font-family: 'Avenir';
  color: #333;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const MenuOptions = styled.div`
  color: #444444;
  display: flex;
  flex-direction: row;
  justify-content: center;
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



export default function Footer() {

    return (<MenuOptions>
                <MenuOption option="Profile"/>
                <MenuOption option="Clients"/>
                <MenuOption option="Work"/>
                <MenuOption option="Project"/>
            </MenuOptions>)}

