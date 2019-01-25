import { handleActions } from 'redux-actions'
import { GET_TEACHERS_REQUEST, GET_TEACHERS_SUCCESS, GET_TEACHERS_FAILURE } from 'actions/teachers'

const initialState = {
  data: null,
  isFetching: false
}

const teachers = handleActions({
  [GET_TEACHERS_REQUEST]: (state, action) => Object.assign({}, state, { isFetching: true }),
  [GET_TEACHERS_SUCCESS]: (state, action) => Object.assign({}, state, { data: action.payload, isFetching: false }),
  [GET_TEACHERS_FAILURE]: (state, action) => Object.assign({}, state, { isFetching: false })
}, initialState)

export default teachers
