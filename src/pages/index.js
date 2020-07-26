import React, {useState} from "react"

import "normalize.css"
import styled from "@emotion/styled"

import Header from "../components/Header"
import WelcomeSection from "../components/WelcomeSection"
import Work from "../components/Work"
import Timeline from "../components/Timeline";

const GlobalStyles = styled.div`
  font-family: 'Open Sans';
  color: #3E3E3E;
  letter-spacing: -0.05em;
`

export default function Home() {

    const [currentSection, setSection] = useState("Home");

    return (
        <GlobalStyles>
            <Header currentSection={currentSection}/>
            <WelcomeSection/>
            <Work/>
            <Timeline/>
            END
        </GlobalStyles>
)}
