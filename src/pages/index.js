import React from "react"

import "normalize.css"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Header from "../components/Header"
import Footer from "../components/Footer"
import TitlePane from "../components/TitlePane"



const GlobalStyles = styled.div`
  font-family: 'Avenir'
  
`

export default function Home() {
    return (<GlobalStyles>
            <Header/>
    </GlobalStyles>)}
