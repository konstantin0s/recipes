import API from '../../middleware/api'
import loading from '../loading'
import loadError from '../load/load-error'
import loadSuccess from '../load/load-success'
import { history } from '../../store'
  import  {push}  from 'react-router-redux'


export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new API()

export default (user) => {
  return (dispatch) => {
    dispatch(loading(true))






    api.authenticate(user)
    .then((response) => {
      console.log("response in sign-in action: ", response )


      dispatch(loadSuccess())
      dispatch({
        type: USER_SIGNED_IN,
        payload: response.data
      })
      history.push('/')
      console.log("Logged in successfully!")
    })
    .catch((error) => {
      dispatch(loadError(error))
    })
    .then(() => {
      dispatch(loading(false))
    })
  }
}
