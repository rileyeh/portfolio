import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Footer from './Footer'
import calfood from '../Assets/calfood.png'
import calhome from '../Assets/calhome.png'
import calmeals from '../Assets/calmeals.png'
import calweight from '../Assets/calweights.png'
import calmenu from '../Assets/calmenu.png'
import dashboard from '../Assets/Dashboard.png'
import gameplay from '../Assets/Gameplay.png'
import addmap from '../Assets/AddMap.png'

export default function Portfolio() {
    return (
        <Body>
            <Nav/>
            <Card>
                <Title>Portfolio</Title>
                <Line />
                <Text>
                <h2>Caltrend</h2>
                <h4>React | HTML5 | CSS4 | NodeJS | Express | Massive PostgreSQL | ChartJS | Styled-Components</h4>
                <ul>+ Designed, created, and hosted a fully functional, mobile responsive web app that tracks nutrition and weight</ul>
                <ul>+ Implemented a searchable USDA nutrition database and wrote a function to handle conversions</ul>
                <ul>+ Taught myself Chart.js and Styled-Components and integrated them into the project</ul>
                <ul>+ Won best overall app</ul>
                <a href='https://github.com/rileyeh/caltrend'>Github Repository</a>
                <a href='https://caltrend.rileyhatch.com'>Live Site</a>
                <Pictures>
                    <p className='left'>&#60;</p>
                    <img src={calhome} alt='caltrend screenshot' style={{'width': 300}}/>
                    <img src={calfood} alt='caltrend screenshot' style={{'width': 300}}/>
                    <img src={calweight} alt='caltrend screenshot' style={{'width': 200}}/>
                    <img src={calmenu} alt='caltrend screenshot' style={{'width': 200}}/>
                    <img src={calmeals} alt='caltrend screenshot' style={{'width': 300}}/>
                    <p className='right'>&#62;</p>
                </Pictures>
                <h2>BTLSRV</h2>
                <h4>React | HTML5 | CSS3 | NodeJS | Express | Massive PostgreSQL | Socket.io | Sass</h4>
                <ul>+ Designed and styled the majority of the app</ul>
                <ul>+ Implemented HTML drag and drop for users to place pieces on a game board and wrote functions to handle illegal placements</ul>
                <ul>+ Handled data manipulation for storage and retrieval from the database</ul>
                <a href='https://github.com/btlsrv/btlsrv'>Github Repository</a>
                <a href='https://btlsrv.rileyhatch.com'>Live Site</a>
                <Pictures>
                    <p className='left'>&#60;</p>
                    <img src={dashboard} alt='caltrend screenshot' style={{'width': 300}}/>
                    <img src={addmap} alt='caltrend screenshot' style={{'width': 300}}/>
                    <img src={gameplay} alt='caltrend screenshot' style={{'width': 300}}/>
                    <p className='right'>&#62;</p>
                </Pictures>
                </Text>
            </Card>
            <Footer/>
        </Body>
    )
}

let primary = '#000F46'
let primaryAccent = '#003C9C'
let secondary = '#2FDA77'
let tertiary = '#F1C40F'
let highlight = '#CF366C'
let shadow = '#515C5D'
let shadowAccent = '#C7C3BD'
let white = '#FFFFFF'
let black = '#333333'

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
    height: 72vh;
    margin: 0 30px;
    background: ${white};
    box-shadow: 10px 10px 0px ${primaryAccent};
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
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
    z-index: 5;
`

const Text = styled.div`
    color: ${primary};
    padding: 0px 110px;
    width: 95%;
    line-height: 1.5;

    a {
        margin-right: 15px;
        text-decoration: none;
        color: ${highlight};

        &:hover {
            text-decoration: underline;
        }
    }
`

const Pictures = styled.div`
    display: flex;
    align-items: center;
    overflow-x: scroll;
    width: 95%;
    position: relative;
    margin: 10px 0;

    img {
        margin-right: 10px;
    }

    p {
        display: none;
    }

    &:hover {
        p {
            color: ${primary};
            font-size: 24px;
            display: block;
            position: sticky;
            z-index: 5;
            text-shadow: 0 0 10px #ffffff;
        }
        .left {
            left: 10px;
        }

        .right {
            right: 10px;
        }
    }
`   