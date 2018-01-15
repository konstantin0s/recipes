
import API from '../../middleware/api'
import { history } from '../../store'


export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'

const api = new API()

export default () => {
  return (dispatch) => {

    //no Promise, because it's an asynchronous method
    api.signOut()
    dispatch({
      type: USER_SIGNED_OUT
    })
    history.push('/')
  }
}
