import { createActions } from 'redux-actions'

export const GET_SUBJECTS_REQUEST = 'GET_SUBJECTS_REQUEST'
export const GET_SUBJECTS_SUCCESS = 'GET_SUBJECTS_SUCCESS'
export const GET_SUBJECTS_FAILURE = 'GET_SUBJECTS_FAILURE'

export const {
  getSubjectsRequest,
  getSubjectsSuccess,
  getSubjectsFailure
} = createActions({
  GET_SUBJECTS_REQUEST: undefined,
  GET_SUBJECTS_SUCCESS: payload => payload,
  GET_SUBJECTS_FAILURE: payload => payload
})
