import React from 'react'
import { Route, IndexRoute } from 'react-router'

import friendlysuggestion from './friendly/FriendlySuggestionPage'
import DeeDeePage from './deedee/DeeDeePage'
import HomePage from '../src/home/HomePage'
import Layout from '../src/layouts/layout'

export default (
  <div>
    {/* main pages */}
    <Route path='/' component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path='/deedee' component={DeeDeePage} />
      <Route path='/friendlysuggestion' component={friendlysuggestion} />
    </Route>
  </div>
)
