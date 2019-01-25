import { createActions } from 'redux-actions'

export const GET_STUDENTS_REQUEST = 'GET_STUDENTS_REQUEST'
export const GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS'
export const GET_STUDENTS_FAILURE = 'GET_STUDENTS_FAILURE'

export const {
  getStudentsRequest,
  getStudentsSuccess,
  getStudentsFailure
} = createActions({
  GET_STUDENTS_REQUEST: undefined,
  GET_STUDENTS_SUCCESS: payload => payload,
  GET_STUDENTS_FAILURE: payload => payload
})
