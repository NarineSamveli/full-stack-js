import { handleActions } from 'redux-actions'
import { GET_STUDENTS_REQUEST, GET_STUDENTS_SUCCESS, GET_STUDENTS_FAILURE } from 'actions/students'

const initialState = {
  data: null,
  isFetching: false
}

const students = handleActions({
  [GET_STUDENTS_REQUEST]: (state, action) => Object.assign({}, state, { isFetching: true }),
  [GET_STUDENTS_SUCCESS]: (state, action) => Object.assign({}, state, { data: action.payload, isFetching: false }),
  [GET_STUDENTS_FAILURE]: (state, action) => Object.assign({}, state, { isFetching: false })
}, initialState)

export default students
