import React, { useEffect, useReducer } from 'react';
import * as ReactLib from 'react';
import './../styles/App.css';

const FETCH_LOREM_REQUEST = 'FETCH_LOREM_REQUEST';
};

const App = () => {
  const [state, dispatch] = useReducer(loremReducer, initialState);
  const [state, dispatch] = ReactLib.useReducer(loremReducer, initialState);
  const { loading, error, title, body } = state;

  useEffect(() => {
  ReactLib.useEffect(() => {
    let isMounted = true;

    const fetchLorem = async () => {
  let content = null;

  if (loading) {
    content = React.createElement('p', { className: 'status' }, 'Loading...');
    content = ReactLib.createElement('p', { className: 'status' }, 'Loading...');
  } else if (error) {
    content = React.createElement('p', { className: 'status error' }, error);
    content = ReactLib.createElement('p', { className: 'status error' }, error);
  } else {
    content = React.createElement(
    content = ReactLib.createElement(
      'p',
      { className: 'lorem-content' },
      React.createElement('strong', null, title),
      React.createElement('span', null, body)
      ReactLib.createElement('strong', null, title),
      ReactLib.createElement('span', null, body)
    );
  }

  return React.createElement(
  return ReactLib.createElement(
    'div',
    null,
    React.createElement(
    ReactLib.createElement(
      'main',
      { className: 'app-shell' },
      React.createElement(
      ReactLib.createElement(
        'section',
        { className: 'content-panel', 'aria-labelledby': 'page-title' },
        React.createElement('h1', { id: 'page-title' }, 'Lorem Redux Output'),
        ReactLib.createElement('h1', { id: 'page-title' }, 'Lorem Redux Output'),
        content
      )
    )
