import React from "react"
import styled from "@emotion/styled"
import Fade from "react-reveal/Fade"

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #f5f5f5;
  justify-content: space-around;
  padding: 20px;
  margin-top: 40px;
`

const Column = styled.div`
  text-align: left;
  margin: 40px;
  color: #aaa;
  display: flex;
  flex-direction: column;
  p {
    font-size: 0.8em;
    margin: 10px 0px;
  }

  a {
    font-size: 0.8em;
    text-decoration: none;
    color: #aaa;
    margin: 10px 0px;
    transition: all 0.1s ease;

    &:hover {
      color: #3399ff;
      transform: translateY(-3px);
      transition: all 0.1s ease;
    }
  }

  h4 {
    color: #3e3e3e;
    font-size: 1em;
    font-weight: 700;
    margin: 10px 0px;
  }
`

export default function Footer(props) {
  return (
    <Container>
      <Fade up>
        <Column>
          <h4>© Halco Consulting 2020</h4>
          <p>ORG.NR: 559114-7144 </p>
          <p>Lotsgatan 1, 185 32, Vaxholm</p>
        </Column>
        <Column>
          <h4>Sitemap</h4>
          <a href="#Home">Home </a>
          <a href="#timeline">Timeline </a>
          <a href="#projects">Projects </a>
        </Column>
        <Column>
          <h4>Links & Social</h4>
          <a href="https://www.linkedin.com/in/gustafhalvardsson/">LinkedIn</a>
          <a href="https://dribbble.com/gustafvh">Dribble</a>
          <a href="https://github.com/gustafvh">GitHub</a>
          <a href="https://medium.com/@gustaf.halvardsson">Medium</a>
        </Column>
        <Column>
          <h4>Resources</h4>
          <a href="https://drive.google.com/file/d/1JyypU1Ru6TEeA1OeQJOrkLeReqyF2fb-/view?usp=sharing">
            View my CV
          </a>
          <a href="https://www.kth.se/student/kurser/program/CINTE/20172/arskurs1">
            My education
          </a>
        </Column>
      </Fade>
    </Container>
  )
}
