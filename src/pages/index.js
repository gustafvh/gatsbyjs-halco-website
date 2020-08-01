import React, { useEffect, useState } from "react"

import "normalize.css"
import styled from "@emotion/styled"

import HeadData from "../components/HeadData"
import Header from "../components/Header"
import WelcomeSection from "../components/WelcomeSection"
import Timeline from "../components/Timeline"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"
import Footer from "../components/Footer"

const GlobalStyles = styled.div`
  font-family: "Open Sans";
  color: #3e3e3e;
  letter-spacing: -0.05em;
  :root {
    scroll-behavior: smooth;
  }

  p {
    letter-spacing: 0;
    line-height: 1.4em;
  }
`

export default function Home() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    // window.addEventListener("keydown", function (event) {
    //   event.preventDefault()
    // })
    // window.addEventListener("scroll", function (event) {
    //   let scroll = this.scrollY
    //   console.log(scroll)
    // })
  })

  return (
    <GlobalStyles>
      <HeadData />
      <Header />
      <WelcomeSection />
      <Timeline />
      <AboutMe />
      <Projects />
      <Footer />
    </GlobalStyles>
  )
}
