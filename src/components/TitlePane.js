import React, {useState} from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { jsx, css } from '@emotion/core'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 40px;
    justify-content: space-around;
    align-items: center;
    
    button {
        width: 100px;
    }
`
const TitleText = styled.div`
    display: flex;
    flex-direction: column;
    h1, h2, h3 {
        margin: 10px;
     }
`
const ImageContainer = styled.div` 
    max-width: 200px;
    max-width: 300px;
`
const ButtonContainer= styled.button`
    width: 100px;
    `

export default function TitlePane(props) {
    const bg = useStaticQuery(graphql`
        query {file(relativePath: { eq: "images/animoji.png" }) {childImageSharp {fixed(width: 220, height: 300) {...GatsbyImageSharpFixed}}}}
    `)

    const [pane, setPane] = useState(1);

    const RenderFirstPane = props => ( <>
        <TitleText>
            <h2>Gustaf Halvardsson</h2>
            <h1>Computer Science student @KTH</h1>
            <h2>23 years old</h2>
        </TitleText>
    <ImageContainer>
        <Img
            fixed={bg.file.childImageSharp.fixed}
            alt="Animoji"
        />
    </ImageContainer>
    </>)

    const RenderSecondPane = props => ( <>
        <TitleText>
            <h2>Benify</h2>
            <h1>Backend GUI</h1>
            <h2>Created system with connected user interface for backend processes.</h2>
        </TitleText>
        <ImageContainer>
            <Img
                fixed={bg.file.childImageSharp.fixed}
                alt="Animoji"
            />
        </ImageContainer>
    </>)

    const paneSelector = [
        <RenderFirstPane/>,
        <RenderSecondPane/>
        ]

    const bgColorSelector = [
        '#F8CE69',
        '#88CF8F',
        '#FEADBB',
        '#CFA0DC'
    ]

    const changePane = (numberToAdd) => {
        setPane(pane+numberToAdd)
        props.setBgcolor(bgColorSelector[Math.abs(pane % paneSelector.length)])
    }

    return (<Container>
        <button onClick={() => changePane(-1) }>Left</button>
        {paneSelector[Math.abs(pane % paneSelector.length)]}
        <button onClick={() => changePane(1)}>Right</button>
        </Container>)}