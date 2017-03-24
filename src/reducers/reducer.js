import { combineReducers } from 'redux'
import {FETCH_QUOTE_REQUEST, FETCH_QUOTE_SUCCESS, FETCH_QUOTE_FAILURE} from "../actions/actions.js"

export default function quotes(state = {},action) {
  switch (action.type){
    case FETCH_QUOTE_REQUEST:
      return Object.assign({},state,{isFetching: true});
    case FETCH_QUOTE_FAILURE:
      return Object.assign({},state,{isFetching: false, error: action.error});
    case FETCH_QUOTE_SUCCESS:
      return Object.assign({},state,{data: action.data});
    default:
      return state;
  }
}
