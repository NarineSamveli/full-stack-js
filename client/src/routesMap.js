import classes from 'thunks/classes'
import students from 'thunks/students'

export default {
  FORBIDDEN: '/forbidden',
  CLASSES: {
    path: '/classes',
    thunk: (dispatch, getState) => {
      dispatch(classes.getClasses())
    }
  },
  LOGIN: '/login',
  MAIN: {
    path: '/',
    thunk: (dispatch, getState) => {
      //
    }
  },

  STUDENTS: {
    path: '/students',
    thunk: (dispatch, getState) => {
      dispatch(students.getStudents())
    }
  }
}
