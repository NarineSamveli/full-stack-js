import { getMeSuccess } from 'actions/users'
import users from 'api/users'
import teachers from 'api/teachers'
import students from 'api/students'

const getMe = () =>
  (dispatch) => {
    users.getMe()
      .then((response) => {
        dispatch(getMeSuccess(response.data))
        const role = response.data
        const id = response.data

        if (role === 'teacher') {
          dispatch(teachers.getTeachers(id))
        } else if (role === 'student') {
          dispatch(students.getStudents(id))
        }
      })
  }

export default {
  getMe
}
