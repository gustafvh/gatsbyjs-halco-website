import React, { useState } from "react"

import "normalize.css"
import styled from "@emotion/styled"

import HeadData from "../components/HeadData"
import Header from "../components/Header"
import WelcomeSection from "../components/WelcomeSection"
import Timeline from "../components/Timeline"
import Projects from "../components/Projects"
import Footer from "../components/Footer"

const GlobalStyles = styled.div`
  font-family: "Open Sans";
  color: #3e3e3e;
  letter-spacing: -0.05em;
  scroll-behavior: smooth;
`

export default function Home() {
  const [currentSection, setSection] = useState("Home")

  return (
    <GlobalStyles>
      <HeadData />
      <Header currentSection={currentSection} />
      <WelcomeSection />
      <Timeline />
      <Projects />
      <Footer />
    </GlobalStyles>
  )
}
