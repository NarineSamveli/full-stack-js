import { getTeachersRequest, getTeachersSuccess, getTeachersFailure } from 'actions/teachers'
import teachers from 'api/teachers'

const getTeachers = () =>
  (dispatch) => {
    teachers.getTeachers()
      .then((response) => {
        dispatch(getTeachersSuccess(response.data))
      })
  }

export default {
  getTeachers
}
