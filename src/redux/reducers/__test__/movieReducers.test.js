import React from 'react';
import renderer from 'react-test-renderer';

import expect from 'expect'

import movieReducer from '../movieReducers'

import { MOVIE_ERROR,
  MOVIE_LOADING_PROGRESS,
  MOVIE_SUCCESS} from '../../actions/movieActions';

  import {actionTypes} from '../../actions/movieActions';


describe('MovieReducer reducer', () => {

  const initialState = {
    data: {},
    isLoaderVisible: false,
    error: '',
  };

  it('Should return initial state', () => {
    const result = movieReducer(
      {
        isLoaderVisible: false,
        data: {},
        error: '',
      },
      {type: 'default'},
    );
    expect(result).toEqual(initialState);
  });

  it('Should return MOVIE_LOADING_PROGRESS', ()  => {
    const result = movieReducer(undefined, {
      type : actionTypes.MOVIE_LOADING_PROGRESS,
    });
    const expected = {
       ...initialState,
      isLoaderVisible: true,
      error: '',
    };
    expect(result).toEqual(expected);
  }
  );

  it('Should return MOVIE_SUCCESS', () => {
    const result = movieReducer(undefined, {
        type: actionTypes.MOVIE_SUCCESS,});
    const expected = {
      ...initialState,
      isLoaderVisible: false,
      data: undefined,
      error: '',
    };
    expect(result).toEqual(expected);
  });

  it('Should return MOVIE_ERROR', () => {
    const result = movieReducer(undefined, {
      type: actionTypes.MOVIE_ERROR,
    });
    const expected = {
      ...initialState,
      isLoaderVisible: false,
      error: undefined,
    };
    expect(result).toEqual(expected);
  });
});
