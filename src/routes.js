// @flow
import React from 'react'
import { Route } from 'react-router'

import App from 'src/components/App.index'
import NotFound from 'src/components/NotFound/NotFound.index'

const getRoutes = () => {

  return (
    <Route path="/" component={App}>

      {/* 404 */}
      <Route path="*" component={NotFound} />
    </Route>
  )

}


export default getRoutes
