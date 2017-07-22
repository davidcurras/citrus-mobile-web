// @flow
import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from 'src/components/App.index'
import DeviceList from 'src/components/DeviceList/DeviceList.index'
import DeviceControls from 'src/components/DeviceControls/DeviceControls.index'
import NotFound from 'src/components/NotFound/NotFound.index'

const getRoutes = () => {

  return (
    <Route path="/" component={App}>
      <IndexRedirect to="devices" />

      <Route path="devices" component={DeviceList} />
      <Route path="device/:deviceId/controls" component={DeviceControls} />

      {/* 404 */}
      <Route path="*" component={NotFound} />
    </Route>
  )

}


export default getRoutes
