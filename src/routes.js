import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Skills from './Components/Skills'

export default (
    <Switch>
        <Route path='/skills' component={Skills} />
        <Route path='/contact' component={Contact}/>
        <Route path='/portfolio' component={Portfolio} />
        <Route exact path='/' component={Home} />
    </Switch>
)