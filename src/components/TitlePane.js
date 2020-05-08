import React, {useState} from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { ArrowLeft, ArrowRight} from "./specials/svgs";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px 20px;
    justify-content: space-between;
    align-items: center;
 
    
    button {
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
    
    button:focus { outline: none; }
`

const PaneContainer = styled.div`
    display: flex;
    flex-direction:  column;
    max-height: 75vh;
    overflow-y: auto;
`

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0px;
`

const ImageContainer = styled.div` 
    max-width: 200px;
    max-width: 300px;
    
`
const TitleText = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    h1, h2, h3 {
        margin: 10px;
     }
`


export default function TitlePane(props) {
    const data = useStaticQuery(graphql`
        query {
            animoji: file(relativePath: { eq: "images/animoji.png" }) {childImageSharp {fixed(width: 230, height: 300) {...GatsbyImageSharpFixed}}}
            benify: file(relativePath: { eq: "images/showcase/showcase_benify.png" }) {childImageSharp {fixed(width: 400, height: 300) {...GatsbyImageSharpFixed}}}
            reused: file(relativePath: { eq: "images/showcase/showcase_reusedremade.png" }) {childImageSharp {fixed(width: 400, height: 300) {...GatsbyImageSharpFixed}}}
        }
    `)

    const [pane, setPane] = useState(1);

    const RenderFirstPane = props => (
        <PaneContainer>
            <RowContainer>
        <ImageContainer>
            <Img
                fixed={data.animoji.childImageSharp.fixed}
                alt="animoji"
            />
        </ImageContainer>
        <TitleText>
            <h2>Gustaf Halvardsson</h2>
            <h1>Computer Science student @KTH</h1>
            <h3>23 years old</h3>
        </TitleText>
            </RowContainer>
            <RowContainer>
        <ImageContainer>
            <Img
                fixed={data.animoji.childImageSharp.fixed}
                alt="animoji"
            />
        </ImageContainer>
        <TitleText>
            <h2>Gustaf Halvardsson</h2>
            <h1>Computer Science student @KTH</h1>
            <h3>23 years old</h3>
        </TitleText>
            </RowContainer>
            <RowContainer>
        <ImageContainer>
            <Img
                fixed={data.animoji.childImageSharp.fixed}
                alt="animoji"
            />
        </ImageContainer>
        <TitleText>
            <h2>Gustaf Halvardsson</h2>
            <h1>Computer Science student @KTH</h1>
            <h3>23 years old</h3>
        </TitleText>
            </RowContainer>
        </PaneContainer>
    )

    const RenderSecondPane = props => ( <PaneContainer>
        <ImageContainer>
            <Img
                fixed={data.benify.childImageSharp.fixed}
                alt="benify"
            />
        </ImageContainer>
        <TitleText>
            <h2>Benify</h2>
            <h1>Backend GUI</h1>
            <h3>Created system with connected user interface for backend processes.</h3>
        </TitleText>
    </PaneContainer>)

    const RenderThirdPane = props => ( <PaneContainer>
        <ImageContainer>
            <Img
                fixed={data.reused.childImageSharp.fixed}
                alt="reused"
            />
        </ImageContainer>
        <TitleText>
            <h2>Reused Remade</h2>
            <h1>Global Webshop</h1>
            <h3>Created global webshop with a connected API towards shipping- and invoice-handling.</h3>
        </TitleText>
    </PaneContainer>)

    const paneSelector = [<RenderSecondPane/>, <RenderFirstPane/>, <RenderThirdPane/>,]

    const bgColorSelector = ['#F8CE69', '#CFA0DC', '#88CF8F', '#FEADBB',]

    const changePane = (numberToAdd) => {
        setPane(pane+numberToAdd)
        props.setBgcolor(bgColorSelector[Math.abs(pane % paneSelector.length)])
    }

    return (<Container>
        <button onClick={() => changePane(-1) }><ArrowLeft/></button>
        {paneSelector[Math.abs(pane % paneSelector.length)]}
        <button onClick={() => changePane(1)}><ArrowRight/></button>
        </Container>)}