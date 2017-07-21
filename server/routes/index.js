// @flow
import htmlHandler from 'server/handlers/html'
import staticFiles from './static'
import swAndCache from './sw-cache'

export default [
  ...staticFiles,
  ...swAndCache,
  // Catch-all for react-router
  {
    method: 'GET',
    path: '/{param*}',
    handler: htmlHandler,
  },
]
