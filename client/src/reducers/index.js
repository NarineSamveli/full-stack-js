import { combineReducers } from 'redux'
import { connectRoutes } from 'redux-first-router'
import { reducer as formReducer } from 'redux-form'

import createHistory from 'history/createBrowserHistory'
import classes from 'reducers/classes'
import page from 'reducers/page'
import me from 'reducers/me'
import teachers from 'reducers/teachers'
import subjects from 'reducers/subjects'
import students from 'reducers/students'
import { marks, postmarks, putmarks } from 'reducers/marks'

import routesMap from 'routesMap'

const history = createHistory()

export const { reducer, middleware, enhancer } = connectRoutes(history, routesMap)

const rootReducer = combineReducers({
  classes,
  form: formReducer,
  location: reducer,
  page,
  me,
  teachers,
  subjects,
  students,
  marks,
  postmarks,
  putmarks
})

export default rootReducer
