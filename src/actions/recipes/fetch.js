import ApiClient from '../../api/client'
// import loading from '../loading'
// import loadError from '../load/load-error'
// import loadSuccess from '../load/load-succes'
export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const api = new ApiClient()

export default () => {
  return dispatch => {
    // dispatch(loading(true)) // ???

    api.get('recipes')
      .then(res => dispatch({ type: FETCHED_RECIPES, payload: res.body }))
      //.catch(err => dispatch(loadError(err))) ???

    // dispatch(loading(false)) // ???
  }
}
