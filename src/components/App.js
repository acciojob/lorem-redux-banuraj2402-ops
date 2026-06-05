import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLorem } from '../store/actions.js';
import React, { useEffect, useReducer } from 'react';
import './../styles/App.css';

const FETCH_LOREM_REQUEST = 'FETCH_LOREM_REQUEST';
const FETCH_LOREM_SUCCESS = 'FETCH_LOREM_SUCCESS';
const FETCH_LOREM_FAILURE = 'FETCH_LOREM_FAILURE';
const API_URL = 'https://api.lorem.com/ipsum';

const initialState = {
  loading: true,
  error: '',
  title: '',
  body: ''
};

const loremReducer = (state, action) => {
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      return {
        loading: true,
        error: '',
        title: '',
        body: ''
      };
    case FETCH_LOREM_SUCCESS:
      return {
        loading: false,
        error: '',
        title: action.payload.title,
        body: action.payload.body
      };
    case FETCH_LOREM_FAILURE:
      return {
        loading: false,
        error: action.payload,
        title: '',
        body: ''
      };
    default:
      return state;
  }
};

const normalizeLoremResponse = (data) => {
  const source = Array.isArray(data)
    ? data[0] || {}
    : (data && (data.data || data.result)) || data || {};
  const title = source.title || source.Title || source.heading || 'Lorem Ipsum';
  const body =
    source.body ||
    source.Body ||
    source.content ||
    source.text ||
    (typeof data === 'string' ? data : '');

  return {
    title: String(title),
    body: String(body)
  };
};

const App = () => {
  const dispatch = useDispatch();
  const { loading, error, title, body } = useSelector((state) => state.lorem);
  const [state, dispatch] = useReducer(loremReducer, initialState);
  const { loading, error, title, body } = state;

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);
    let isMounted = true;

    const fetchLorem = async () => {
      dispatch({ type: FETCH_LOREM_REQUEST });

      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error('Unable to fetch lorem ipsum content.');
        }

        const responseText = await response.text();
        let data = {};

        if (responseText) {
          try {
            data = JSON.parse(responseText);
          } catch (error) {
            data = responseText;
          }
        }

        if (isMounted) {
          dispatch({
            type: FETCH_LOREM_SUCCESS,
            payload: normalizeLoremResponse(data)
          });
        }
      } catch (error) {
        if (isMounted) {
          dispatch({
            type: FETCH_LOREM_FAILURE,
            payload: error.message || 'Unable to fetch lorem ipsum content.'
          });
        }
      }
    };

    fetchLorem();

    return () => {
      isMounted = false;
    };
  }, []);

  let content = null;
