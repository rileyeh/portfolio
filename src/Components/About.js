import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Body, Card, Title, Line, Text } from './Styled'

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