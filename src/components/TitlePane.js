import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { jsx, css } from '@emotion/core'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 40px;
`
const TitleText = styled.div`
    display: flex;
    flex-direction: column;
    h1, h2, h3 {
        margin: 10px;
     }
`


export default function Footer() {
    const bg = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "images/animoji.png" }) {
                childImageSharp {
                    fixed(width: 200, height: 300) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    return (<Container>
        <TitleText>
            <h2>Gustaf Halvardsson</h2>
            <h1>Computer Science student @KTH</h1>
            <h2>23 years old</h2>
        </TitleText>
        <Img
            fixed={bg.file.childImageSharp.fixed}
            alt="Logo"
        />
        </Container>)}

