import axios from 'axios';

export const FETCH_QUOTE_REQUEST = 'FETCH_QUOTE_REQUEST';
export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS'

export function receiveQuote(data){
  return {
    type: FETCH_QUOTE_SUCCESS,
    data
  };
}

export function failedQuoteFetch(error){
  return {
    type: FETCH_QUOTE_FAILURE,
    error
  };
}

export function getQuoteFormatic(){
  return (dispatch) => {
    dispatch({type: FETCH_QUOTE_REQUEST});
    //make the api call
    axios.get('http://quotes.rest/qod.json?category=inspire')
    .then(response => {console.log(response); return response.data;})
    .then(json => dispatch(receiveQuote(json)))
    .catch(err => dispatch(failedQuoteFetch(err)))
  };
}
