import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Footer from './Footer'

export default function About() {
    return (
        <Body>
            <Nav/>
            <Card>
                <Title>About</Title>
                <Line/>
                <Text>I am a full stack web developer who specializes in JavaScript, ReactJS, HTML, CSS, NodeJS, and PostgreSQL. I enjoy teaching, learning, and problem solving. Outside of work, you can find me with my family and friends, outside with my dog, or with a book. I also enjoy reading, playing games, hand lettering, and drawing. I love web development because it combines logic and design.</Text>
            </Card>
            <Footer/>
        </Body>
    )
}

let primary = '#000F46'
let primaryAccent = '#003C9C'
let secondary = '#2FDA77'
let tertiary = '#F1C40F'
// let highlight = '#CF366C'
// let shadow = '#515C5D'
// let shadowAccent = '#C7C3BD'
let white = '#FFFFFF'
// let black = '#333333'

const Body = styled.div`
  background: ${primary};
  background-size: 20px 20px;
  background-image: radial-gradient(circle, ${primaryAccent} 1px, rgba(0, 0, 0, 0) 1px);
  // background-image: linear-gradient(to right, ${primaryAccent} 1px, transparent 1px), linear-gradient(to bottom, ${primaryAccent} 1px, transparent 1px);
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Card = styled.div`
    width: 90vw;
    min-height: 70vh;
    margin: 0 30px;
    background: ${white};
    box-shadow: 10px 10px 0px ${primaryAccent};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h2`
    color: ${primary};
    height: 40px;
    font-size: 40px;
    // text-shadow: 2px 2px 0px ${secondary};
    padding: 40px;
`

const Line = styled.div`
    height: 3px;
    width: 80%;
    background: linear-gradient(to right, ${tertiary}, #d8ff3b, ${secondary});
    margin: 40px 0px;
`

const Text = styled.p`
    color: ${primary};
    padding: 0px 110px;
    width: 85%;
    font-size: 25px;
`