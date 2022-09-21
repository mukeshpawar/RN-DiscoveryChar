import {
  MOVIE_ERROR,
  MOVIE_LOADING_PROGRESS,
  MOVIE_SUCCESS,
} from '../../constants/constants';

export const actionTypes = {
  MOVIE_SUCCESS: MOVIE_SUCCESS,
  MOVIE_ERROR: MOVIE_ERROR,
  MOVIE_LOADING_PROGRESS: MOVIE_LOADING_PROGRESS,
};


export const productSuccess = response => {
  return {
    type: actionTypes.MOVIE_SUCCESS,
    payload: response,
  };
};

export const productError = error => {
  return {
    type: actionTypes.MOVIE_ERROR,
    payload: error,
  };
};

export const loadingProductStart = response => {
  return {
    type: actionTypes.MOVIE_LOADING_PROGRESS,
  };
};


