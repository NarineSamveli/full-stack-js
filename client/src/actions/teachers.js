import { createActions } from 'redux-actions'

export const GET_TEACHERS_REQUEST = 'GET_TEACHERS_REQUEST'
export const GET_TEACHERS_SUCCESS = 'GET_TEACHERS_SUCCESS'
export const GET_TEACHERS_FAILURE = 'GET_TEACHERS_FAILURE'

export const {
  getTeachersRequest,
  getTeachersSuccess,
  getTeachersFailure
} = createActions({
  GET_TEACHERS_REQUEST: undefined,
  GET_TEACHERS_SUCCESS: payload => payload,
  GET_TEACHERS_FAILURE: payload => payload
})
