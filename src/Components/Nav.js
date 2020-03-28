import React from 'react'
import { NavBar, Name, Links, StyledLink } from './Styled'

export default function Nav() {
    return (
        <NavBar>
            <Name to='/'>Riley Hatch</Name>
            <Links>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/portfolio'>Portfolio</StyledLink>
                <StyledLink to ='/skills'>Skills</StyledLink>
                <StyledLink to='/contact'>Contact</StyledLink>
            </Links>
        </NavBar>
    )
}
