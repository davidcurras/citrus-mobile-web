// @flow
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'

import env from './env'
import request from './request'
import init from './init'
import ui from './ui'


const rootReducer = combineReducers({
  env,
  request,
  init,
  ui,

  // redux-form
  form,
  // react-router-redux
  routing,
})


export default rootReducer
