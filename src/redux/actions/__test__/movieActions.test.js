import React from 'react';
import renderer from 'react-test-renderer';

import expect from 'expect'


// import { MOVIE_ERROR,
//   MOVIE_LOADING_PROGRESS,
//   MOVIE_SUCCESS} from '../../actions/movieActions';

import {actionTypes} from '../../actions/movieActions';

import {productSuccess, productError,loadingProductStart}  from '../movieActions'


describe('MovieActions test', () => {

  it('Should return productSuccess', () => {
    const task = 'response'
    const expectedAction = { type: actionTypes.MOVIE_SUCCESS, payload: task };
    expect(productSuccess(task)).toEqual(expectedAction);
  });


  it('Should return productError', ( ) => {
    const task = 'error'
    const expectedAction = { type: actionTypes.MOVIE_ERROR, payload: task
   };
    expect(productError(task)).toEqual(expectedAction);
  });

  it('Should return loadingProductStart', () => {
    const task = { }
    const expectedAction = { type: actionTypes.MOVIE_LOADING_PROGRESS, };
    expect(loadingProductStart()).toEqual(expectedAction);
  });

});



