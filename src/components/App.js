import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLorem } from '../store/actions.js';
import './../styles/App.css';

const App = () => {
  const dispatch = useDispatch();
  const { loading, error, title, body } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  let content = null;

  if (loading) {
    content = React.createElement('p', { className: 'status' }, 'Loading...');
  } else if (error) {
    content = React.createElement('p', { className: 'status error' }, error);
  } else {
    content = React.createElement(
      'p',
      { className: 'lorem-content' },
      React.createElement('strong', null, title),
      React.createElement('span', null, body)
    );
  }

  return React.createElement(
    'div',
    null,
    React.createElement(
      'main',
      { className: 'app-shell' },
      React.createElement(
        'section',
        { className: 'content-panel', 'aria-labelledby': 'page-title' },
        React.createElement('h1', { id: 'page-title' }, 'Lorem Redux Output'),
        content
      )
    )
  );
};

export default App;
