import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <NavBar>
            <Name to='/'>Riley Hatch</Name>
            <Links>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/about'>About</StyledLink>
                <StyledLink to='/portfolio'>Portfolio</StyledLink>
                {/* <StyledLink to='/contact'>Contact</StyledLink> */}
                <StyledLink to ='/skills'>Skills</StyledLink>
            </Links>
        </NavBar>
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

const NavBar = styled.div`
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: absolute;
    top: 0;
`

const Name = styled(Link)`
  color: ${white};
  font-size: 30px;
  text-decoration: none;
  font-weight: bold;

  :hover {
      color: ${tertiary};
  }
`

const Links = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledLink = styled(Link)`
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