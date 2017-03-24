import React, { Component, PropTypes } from 'react';
export default function Quote({quote, author, source, onEdit, onNew}) {
  return <div>
    <p> {quote} </p>
    <p> {author}, <small> {source} </small>  </p>
    <button onClick={onEdit}> 'Edit' </button>
    <button onClick={onNew}> 'New' </button>
  </div>
}
