import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { jsx, css } from '@emotion/core'

const Container = styled.span`
  font-family: 'Avenir';
  color: #333;
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
`

const scrollBn =  styled.span`



`


export default function MouseScrollIcon() {

    return (
        <div className="row ">
        <span style={{marginTop: "100px", animationDelay: "3500ms"}}
          className="scroll-btn animated fadeIn">
            <a href="#"> <span className="mouse">
                <span></span> </span> </a></span>
        </div>
    )}

