import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Footer from './Footer'
import css from '../Assets/css-3.png'
import html from '../Assets/html5.png'
import express from '../Assets/express.png'
import java from '../Assets/javascript.png'
import node from '../Assets/node.png'
import postgres from '../Assets/PostgreSQL.png'
import reacticon from '../Assets/React-icon.png'
import redux from '../Assets/redux.png'

export default function Skills() {
    return (
        <Body>
            <Nav/>
            <Card>
                <Title>Skills</Title>
                <Line/>
                <Pictures>
                    <div>
                        <img src={java} alt=''/>
                        <p>javascript</p>
                    </div>
                    <div>
                        <img src={css} alt=''/>
                        <p>css3</p>
                    </div>
                    <div>
                        <img src={html} alt=''/>
                        <p>html5</p>
                    </div>
                    <div>
                        <img src={reacticon} alt=''/>
                        <p>react</p>
                    </div>
                    <div>
                        <img src={node} alt=''/>
                        <p>nodejs</p>
                    </div>
                    <div>
                        <img src={redux} alt=''/>
                        <p>redux</p>
                    </div>
                    <div>
                        <img src={express} alt=''/>
                        <p>express</p>
                    </div>
                    <div>
                        <img src={postgres} alt=''/>
                        <p>postgresql</p>
                    </div>
                </Pictures>
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
    margin: 30px 0px;
`

const Text = styled.p`
    color: ${primary};
    padding: 0px 110px;
    width: 80%;
    font-size: 25px;
`

const Pictures = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 75%;
    position: relative;
    margin: 10px 0;

    div {
        width: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5px;
    }

    img {
        width: 100px;
    }
`   