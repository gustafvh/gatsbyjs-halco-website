import React, {useState} from "react"

import "normalize.css"
import styled from "@emotion/styled"

import Header from "../components/Header"
import WelcomeSection from "../components/WelcomeSection"

const GlobalStyles = styled.div`
  font-family: 'Open Sans';
  color: #333;
`

export default function Home() {

    return (
        <GlobalStyles>
            <Header/>
            <WelcomeSection/>
        </GlobalStyles>)}
