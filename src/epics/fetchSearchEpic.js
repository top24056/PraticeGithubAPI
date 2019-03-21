import axios from 'axios'
import { SEARCH_REPOSITY } from '../actions/actionType'

import {searchSucess} from '../actions/searchReposity'
import { mergeMap,filter } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators'
import { ofType } from 'redux-observable';

export const fetchSearchEpic = action$ => action$.pipe(
  ofType(SEARCH_REPOSITY),
  debounceTime(1000),
  filter(action => action.name !== ''),
  mergeMap(action => {
    return axios({
      method : 'GET',
      url : `https://api.github.com/search/repositories?q=${action.name}&page=${action.page}`,
    }).then(data => {
      return searchSucess(data)
    })
  })
)