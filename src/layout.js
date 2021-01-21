import React from 'react'
import { Switch, Route } from 'react-router-dom'
import injectContext from './store/appContext'

import Home from './home'
import ContactListSimple from './contact_list_simple'
import ContactListContextApi from './contact_list_context_api'
import ContactListUSeHistory from './contact_list_useHistory'


function Layout() {
  return (
    <Switch>

      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/ContactListSimple'>
        <ContactListSimple />
      </Route>

      <Route exact path='/ContactListContextApi'>
        <ContactListContextApi />
      </Route>

      <Route exact path='/ContactListUSeHistory'>
        <ContactListUSeHistory />
      </Route>

    </Switch>
  )
}

export default injectContext(Layout)


