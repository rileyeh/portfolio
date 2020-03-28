import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import riley from '../Assets/squareheadshot.jpg'
import styled from 'styled-components'
import { Body, Card, Title, Line, Main } from './Styled'

export default function Home() {
  return (
    <Body>
      <Nav/>
      <Card>
        <Title>Welcome</Title>
        <Line />
        <Main>
          <img src={riley} alt='' style={{width: 200, height: 200, marginLeft: 150}}/>
          <Text>
          I am a full stack web developer who specializes in JavaScript, ReactJS, HTML, CSS, NodeJS, and PostgreSQL. I enjoy teaching, learning, and problem solving. Outside of work, you can find me with my family and friends, outside with my dog, or with a book. I also enjoy reading, playing games, hand lettering, and drawing. I love web development because it combines logic and design.
          </Text>
        </Main>
      </Card>
      <Footer/>
    </Body>
  )
}

let primary = '#000F46'

const Text = styled.p`
    color: ${primary};
    padding: 0px 110px;
    width: 65%;
    font-size: 25px;
    text-align: center;
`