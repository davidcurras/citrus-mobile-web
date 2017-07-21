// @flow
import { createSelector } from 'reselect'

const getInitLoading = (state) => {

  return state.init.isLoading

}

const getUiLoading = (state) => {

  return state.ui.showLoading

}


const areWeLoading = createSelector([
  getInitLoading,
  getUiLoading,
], (
  initLoading,
  uiLoading,
) => {

  if (
    initLoading
    || uiLoading
  ) {

    return true

  }
  // default
  return false

})


export default areWeLoading
