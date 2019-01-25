import { createActions } from 'redux-actions'

export const GET_MARKS_REQUEST = 'GET_MARKS_REQUEST'
export const GET_MARKS_SUCCESS = 'GET_MARKS_SUCCESS'
export const GET_MARKS_FAILURE = 'GET_MARKS_FAILURE'

export const POST_MARKS_REQUEST = 'POST_MARKS_REQUEST'
export const POST_MARKS_SUCCESS = 'POST_MARKS_SUCCESS'
export const POST_MARKS_FAILURE = 'POST_MARKS_FAILURE'

export const PUT_MARKS_REQUEST = 'PUT_MARKS_REQUEST'
export const PUT_MARKS_SUCCESS = 'PUT_MARKS_SUCCESS'
export const PUT_MARKS_FAILURE = 'PUT_MARKS_FAILURE'

export const {
  getMarksRequest,
  getMarksSuccess,
  getMarksFailure,

  postMarksRequest,
  postMarksSuccess,
  postMarksFailure,

  putMarksRequest,
  putMarksSuccess,
  putMarksFailure
} = createActions({
  GET_MARKS_REQUEST: undefined,
  GET_MARKS_SUCCESS: payload => payload,
  GET_MARKS_FAILURE: payload => payload,

  POST_MARKS_REQUEST: undefined,
  POST_MARKS_SUCCESS: payload => payload,
  POST_MARKS_FAILURE: payload => payload,

  PUT_MARKS_REQUEST: undefined,
  PUT_MARKS_SUCCESS: payload => payload,
  PUT_MARKS_FAILURE: payload => payload
})
