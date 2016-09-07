import React from 'react'
import { Route, IndexRoute } from 'react-router'

import BatteryPage from '../src/battery/ThetalePage'
import DeeDeePage from './deedee/DeeDeePage'
import FastPage from '../src/factsvsfaith/FactsPage'
import FriendlyPage from '../src/friendly/FriendlySuggestionPage'
import HandbagPage from '../src/handbag/HandbagPage'
import HomePage from '../src/home/HomePage'
import IllustrationPage from '../src/illustration/IllustrationPage'
import InformationPage from '../src/information/InformationPage'
import Layout from '../src/layouts/layout'
import LovehurtsPage from '../src/lovehurts/LoveHurtsPage'
import OutlinePage from '../src/outline/OutlinePage'
import TailPage from '../src/thetaleofbamboo/ThetalePage'
import WhoPage from '../src/whoschasingwho/OutlinePage'

export default (
  <div>
    {/* main pages */}
    <Route path='/' component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path='/deedee/' component={DeeDeePage} />
      <Route path='/factsvsfaith/' component={FastPage} />
      <Route path='/friendly/' component={FriendlyPage} />
      <Route path='/hangbag/' component={HandbagPage} />
      <Route path='/illustration/' component={IllustrationPage} />
      <Route path='/lovehurts/' component={LovehurtsPage} />
      <Route path='/bamboo/' component={TailPage} />
      <Route path='/who/' component={WhoPage} />
      <Route path='/outline/' component={OutlinePage} />
      <Route path='/battery/' component={BatteryPage} />
      <Route path='/information/' component={InformationPage} />
    </Route>
  </div>
)
