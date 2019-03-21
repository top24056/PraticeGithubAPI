import { 
  SEARCH_REPOSITY,
  SEARCH_SUCCESS,
  CLEAR_INFO_REPOSITY
} from './actionType' 

export const searchname = (name,page=1) => ({
  type : SEARCH_REPOSITY,
  name,
  page
})

export const searchSucess = (info) => ({
  type : SEARCH_SUCCESS,
  info,
})

export const clearsearch = (info = []) => ({
  type : CLEAR_INFO_REPOSITY,
  info
})