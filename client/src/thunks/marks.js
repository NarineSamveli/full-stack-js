import { getMarksRequest, getMarksSuccess, getMarksFailure } from 'actions/marks'
import { postMarksRequest, postMarksSuccess, postMarksFailure } from 'actions/marks'
import { putMarksRequest, putMarksSuccess, putMarksFailure } from 'actions/marks'

import marks from 'api/marks'

const getMarks = () =>
  (dispatch) => {
    marks.getMarks()
      .then((response) => {
        dispatch(getMarksSuccess(response.data))
      })
  }

  const postMarks = () =>
  (dispatch) => {
    marks.postMarks()
      .then((response) => {
        dispatch(postMarksSuccess(response.data))
      })
  }

  const putMarks = () =>
  (dispatch) => {
    marks.putMarks()
      .then((response) => {
        dispatch(putMarksSuccess(response.data))
      })
  }

export default {
  getMarks,
  postMarks,
  putMarks

}
