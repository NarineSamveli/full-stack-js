import { handleActions } from 'redux-actions'
import { GET_MARKS_REQUEST, GET_MARKS_SUCCESS, GET_MARKS_FAILURE,
  POST_MARKS_REQUEST, POST_MARKS_SUCCESS, POST_MARKS_FAILURE,
  PUT_MARKS_REQUEST, PUT_MARKS_SUCCESS, PUT_MARKS_FAILURE } from 'actions/marks'

const initialState = {
  data: null,
  isFetching: false
}

const marks = handleActions({
  [GET_MARKS_REQUEST]: (state, action) => Object.assign({}, state, { isFetching: true }),
  [GET_MARKS_SUCCESS]: (state, action) => Object.assign({}, state, { data: action.payload, isFetching: false }),
  [GET_MARKS_FAILURE]: (state, action) => Object.assign({}, state, { isFetching: false })
}, initialState)

const postmarks = handleActions({
  [POST_MARKS_REQUEST]: (state, action) => Object.assign({}, state, { isFetching: true }),
  [POST_MARKS_SUCCESS]: (state, action) => Object.assign({}, state, { data: action.payload, isFetching: false }),
  [POST_MARKS_FAILURE]: (state, action) => Object.assign({}, state, { isFetching: false })
}, initialState)

const putmarks = handleActions({
  [PUT_MARKS_REQUEST]: (state, action) => Object.assign({}, state, { isFetching: true }),
  [PUT_MARKS_SUCCESS]: (state, action) => Object.assign({}, state, { data: action.payload, isFetching: false }),
  [PUT_MARKS_FAILURE]: (state, action) => Object.assign({}, state, { isFetching: false })
}, initialState)

export {
  marks,
  postmarks,
  putmarks
}