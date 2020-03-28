import styled from 'styled-components'
import { Link } from 'react-router-dom'

let primary = '#000F46'
let primaryAccent = '#003C9C'
let secondary = '#2FDA77'
let tertiary = '#F1C40F'
let highlight = '#CF366C'
let shadow = '#515C5D'
let white = '#FFFFFF'

export const Body = styled.div`
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

export const Card = styled.div`
    width: 90vw;
    min-height: 70vh;
    margin: 0 30px;
    background: ${white};
    box-shadow: 10px 10px 0px ${primaryAccent};
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h2`
    color: ${primary};
    height: 40px;
    font-size: 40px;
    padding: 40px;
`

export const Line = styled.div`
    height: 3px;
    width: 80%;
    background: linear-gradient(to right, ${tertiary}, #d8ff3b, ${secondary});
    margin: 40px 0px;
`

export const Text = styled.p`
    color: ${primary};
    padding: 0px 110px;
    width: 85%;
    font-size: 25px;
    text-align: center;
`

export const NavBar = styled.div`
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: absolute;
    top: 0;
`

export const Name = styled(Link)`
  color: ${white};
  font-size: 30px;
  text-decoration: none;
  font-weight: bold;

  :hover {
      color: ${tertiary};
  }
`

export const Links = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${white};
    font-size: 14px;

    :hover {
        color: ${highlight};
    }

    :active {
        color: ${shadow};
    }
`

export const Main = styled.div`
  display: flex;
  width: 100%;
  justify-content: sapce-evenly;
  align-items: center;
`

export const LinkBox = styled.div`
  width: 70%;
  height: 45%;
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const PlainLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-decoration: none;

  img {
    width: 150px;
    margin: 10px;
  }

  p {
    color: ${primary};
    font-weight: bold;

    &:hover {
      color: ${highlight};
    }
  }
`


export const Pictures = styled.div`
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