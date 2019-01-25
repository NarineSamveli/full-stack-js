import { handleActions } from 'redux-actions'
import { GET_SUBJECTS_REQUEST, GET_SUBJECTS_SUCCESS, GET_SUBJECTS_FAILURE } from 'actions/subjects'

const initialState = {
  data: null,
  isFetching: false
}

const subjects = handleActions({
  [GET_SUBJECTS_REQUEST]: (state, action) => Object.assign({}, state, { isFetching: true }),
  [GET_SUBJECTS_SUCCESS]: (state, action) => Object.assign({}, state, { data: action.payload, isFetching: false }),
  [GET_SUBJECTS_FAILURE]: (state, action) => Object.assign({}, state, { isFetching: false })
}, initialState)

export default subjects
