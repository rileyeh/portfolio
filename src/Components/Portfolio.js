import React, { useState } from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Footer from './Footer'
import Photos from './Photos'
import { Body, Title, Line } from './Styled'

export default function Portfolio() {
    const [photos, setPhotos] = useState('')

    return (
        <Body>
            <Nav/>
            <Card>
                <Title>Portfolio</Title>
                <Text>
                <Line />
                <h2>Lister</h2>
                <h4>React | HTML5 | Sass | Context | Hooks | NodeJS | Express | Massive | PostgreSQL</h4>
                <ul>+ Coded a list making app to practice hooks and React context</ul>
                <ul>+ Worked with DigitalOcean and Nginx to host (and figured out my fair share of problems)</ul>
                <a href='https://github.com/rileyeh/lister'>Github Repository</a>
                <a href='https://lister.rileyhatch.com'>Live Site</a>
                <span onClick={() => setPhotos('list')}>Photos</span>
                {photos === 'list' ?  <Photos setPhotos={setPhotos} id='list'/> : null}
            
                <h2>BTLSRV</h2>
                <h4>React | HTML5 | CSS3 | NodeJS | Express | Massive PostgreSQL | Socket.io | Sass</h4>
                <ul>+ Designed and styled the majority of the app</ul>
                <ul>+ Implemented HTML drag and drop for users to place pieces on a game board and wrote functions to handle illegal placements</ul>
                <ul>+ Handled data manipulation for storage and retrieval from the database</ul>
                <a href='https://github.com/btlsrv/btlsrv'>Github Repository</a>
                <a href='https://btlsrv.rileyhatch.com'>Live Site</a>
                <span onClick={() => setPhotos('btl')}>Photos</span>
                {photos === 'btl' ?  <Photos setPhotos={setPhotos} id='btl'/> : null}

                <h2>Shut Eye</h2>
                <h4>React | HTML5 | CSS3 | Moment.js </h4>
                <ul>+ First app I made by myself, when I was first learning React</ul>
                <ul>+ Implemented a date picker and used Moment.js to handle dates</ul>
                <ul>+ This is a database-less project</ul>
                <a href='https://github.com/rileyeh/shut-eye'>Github Repository</a>
                <a href='https://shuteye.rileyhatch.com'>Live Site</a>
                <span onClick={() => setPhotos('shut')}>Photos</span>
                {photos === 'shut' ?  <Photos setPhotos={setPhotos} id='shut'/> : null}

                <h2>Caltrend</h2>
                <h3><span role='img' aria-label='construction barrier'>🚧</span> currently under construction <span role='img' aria-label='construction barrier'>🚧</span> </h3>
                <h4>React | HTML5 | CSS3 | NodeJS | Express | Massive PostgreSQL | Redux | ChartJS | Styled-Components</h4>
                <ul>+ Designed, created, and hosted a fully functional, mobile responsive web app that tracks nutrition and weight</ul>
                <ul>+ Implemented a searchable USDA nutrition database and wrote a function to handle conversions</ul>
                <ul>+ Taught myself Chart.js and Styled-Components and integrated them into the project</ul>
                <ul>+ Won best overall app</ul>
                <a href='https://github.com/rileyeh/caltrend'>Github Repository</a>
                <a href='https://caltrend.rileyhatch.com'>Live Site</a>
                <span onClick={() => setPhotos('cal')}>Photos</span>
                {photos === 'cal' ?  <Photos setPhotos={setPhotos} id='cal'/> : null}
                </Text>
            </Card>
            <Footer/>
        </Body>
    )
}

let primary = '#000F46'
let highlight = '#CF366C'
let white = '#FFFFFF'
let primaryAccent = '#003C9C'

const Card = styled.div`
    width: 90vw;
    height: 72vh;
    margin: 0 30px;
    background: ${white};
    box-shadow: 10px 10px 0px ${primaryAccent};
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`

const Text = styled.div`
    color: ${primary};
    padding: 100px;
    padding-top: 0;
    width: 95%;
    line-height: 1.5;

    h2 {
        margin-top: 20px;
    }

    a {
        margin-right: 15px;
        text-decoration: none;
        color: ${highlight};
        margin-bottom: 20px;

        &:hover {
            text-decoration: underline;
        }
    }

    span {
        margin-right: 15px;
        text-decoration: none;
        color: ${highlight};

        &:hover {
            text-decoration: underline;
        }
    }
`