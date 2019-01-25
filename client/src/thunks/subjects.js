import { getSubjectsRequest, getSubjectsSuccess, getSubjectsFailure } from 'actions/subjects'
import subjects from 'api/subjects'

const getSubjects = () =>
  (dispatch) => {
    subjects.getSubjects()
      .then((response) => {
        dispatch(getSubjectsSuccess(response.data))
      })
  }

export default {
  getSubjects
}
