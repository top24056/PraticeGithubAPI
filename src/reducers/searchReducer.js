import { 
  SEARCH_REPOSITY,
  SEARCH_SUCCESS,
  CLEAR_INFO_REPOSITY
 } from '../actions/actionType'

const initialState = {
  name : '',
  info : [],
  page : 1,
  totalinfo : 0
}

export const searchByName =  (state = initialState, action) => {
  switch(action.type){
    case SEARCH_REPOSITY:{
      if(state.name !== action.name){
        // console.log('name not same pre',action.name)
        return {
          ...state,
          name : action.name,
          info : []
        }
      }
      else{
        return {
          ...state,
          name : action.name,
        }
      }
    }
    case SEARCH_SUCCESS: {
      // console.log('Reducer SEARCH_SUCCESS',state.name)
      return {
        ...state,
        info : [...state.info, ...action.info.data.items],
        totalinfo : action.info.data.total_count
      }
    }
    case CLEAR_INFO_REPOSITY : {
      return {
        ...state,
        info : []
      }
    }
    default:
      return state
  }
}

