import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {listAllCompanies, fileupload} from './components'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/allcompanies" component={listAllCompanies} />
        <Route path="/fileupload" component={fileupload} />
        <Redirect to="/allcompanies" />
      </Switch>
    )
  }
}

export default Routes
