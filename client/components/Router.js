import React from 'react'
import { Route, Switch } from 'react-router-dom'

import OnlyView from 'Components/OnlyView'
import SurpriseConfirm from 'Components/SurpriseConfirm'
import Info from 'Components/Info'

export default () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={OnlyView} />
      <Route exact path="/grades" component={SurpriseConfirm} />
      <Route exact path="/info" component={Info} />
      <Route path="*" render={() => <div>Page not found!</div>} />
    </Switch>
  </div>
)
