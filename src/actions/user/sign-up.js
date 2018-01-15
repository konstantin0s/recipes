import API from '../../middleware/api'
import loading from '../loading'
import loadError from '../load/load-error'
import loadSuccess from '../load/load-success'
export const USER_SIGNED_UP = 'USER_SIGNED_UP'

const api = new API()
const users = api.service('users')

export default (user) => {
  return (dispatch) => {
    dispatch(loading(true))

    users.create(user)
    .then((response) => {
      dispatch(loadSuccess())
      dispatch({ type: USER_SIGNED_UP })
    })
    .catch((error) => {
      dispatch(loadError(error))
    })
    .then(() => {
      dispatch(loading(false))
    })
  }
}
