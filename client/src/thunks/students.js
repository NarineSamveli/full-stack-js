import { getStudentsSuccess } from 'actions/students'
import students from 'api/students'

const getStudents = () =>
  (dispatch) => {
    students.getStudents()
      .then((response) => {
        dispatch(getStudentsSuccess(response.data))
      })
  }

export default {
  getStudents
}
