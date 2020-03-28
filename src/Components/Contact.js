import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import linkedinicon from '../Assets/linkedinport.svg'
import githubicon from '../Assets/githubport.svg'
import { Body, Card, Title, Line, PlainLink, Text, LinkBox } from './Styled'

export default function Contact() {
    return (
        <Body>
            <Nav/>
            <Card>
                <Title>Contact Information</Title>
                <Line/>
                <Text>
                    rileyehatch@gmail.com
                </Text>
                <LinkBox>
                    <PlainLink href='https://www.linkedin.com/in/riley-hatch-dev'>
                        <img src={linkedinicon} alt='link to linkedin'/>
                        <p>linkedin</p>
                    </PlainLink>
                    <PlainLink href='https://www.github.com/rileyeh'>
                        <img src={githubicon} alt='link to github'/>
                        <p>github</p>
                    </PlainLink>
                </LinkBox>
            </Card>
            <Footer/>
        </Body>
    )
}