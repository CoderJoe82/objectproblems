import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from '../LandingPage/landing.page'

const Routes = () =>  {

        return (
            <Router>
                <Switch>
                    <Route path = "/" exact component = {LandingPage}/>
                </Switch>
            </Router>
        )
    
}

export default Routes