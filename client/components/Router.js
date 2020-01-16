import React from 'react'
import { Route, Switch } from 'react-router-dom'

import OnlyView from 'Components/OnlyView'
import SurpriseGrades from 'Components/SurpriseGrades'

export default () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={OnlyView} />
      <Route exact path="/grades" component={SurpriseGrades} />
      <Route path="*" render={() => <div>Page not found!</div>} />
    </Switch>
  </div>
)
