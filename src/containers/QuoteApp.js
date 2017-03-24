import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from "../actions/actions.js";
import QuoteView from "../views/quote.jsx";

class QuoteApp extends Component{
  constructor(props){
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleNew = this.handleNew.bind(this);
  }

componentDidMount(){
  const {dispatch} = this.props
  dispatch(ActionCreators.getQuoteFormatic());
}

handleEdit(e) {
  e.preventDefault();
  console.log("Trying to Edit");
}

handleNew(e) {
  e.preventDefault();
  this.props.dispatch(ActionCreators.getQuoteFormatic());
}

render() {
const {quote, author} = this.props
 return   <div>
    <QuoteView quote={quote} author={author} onNew={this.handleNew} onEdit={this.handleEdit}>
    </QuoteView>
  </div>
}

}

function mapStateToProps(state){
  let data = state.data;
  let isFetching = state.isFetching;
  return {
    quote: data.contents.quotes[0].quote,
    author: data.contents.quotes[0].author,
    isFetching
  }
}

export  default connect(mapStateToProps)(QuoteApp)
