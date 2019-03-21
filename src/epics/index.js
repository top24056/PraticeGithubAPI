import { combineEpics } from 'redux-observable'
import { fetchSearchEpic } from './fetchSearchEpic'

export default combineEpics(
  fetchSearchEpic
)