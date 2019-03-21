import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable'
// import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers'
import rootEpic from '../epics'

const epicMiddleware = createEpicMiddleware()

const logger = createLogger({
  duration : true,
  timestamp : false,
  collapsed : true
})

export default function condfigureStore(){
  const store = createStore(
    rootReducer,
    // composeWithDevTools(
      applyMiddleware(epicMiddleware,logger)
    // )
  );


  epicMiddleware.run(rootEpic)
  return store
}

