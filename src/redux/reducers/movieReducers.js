import {
  MOVIE_ERROR,
  MOVIE_LOADING_PROGRESS,
  MOVIE_SUCCESS,
} from '../../constants/constants';

 import {actionTypes} from '../actions/movieActions';


const initialState = {
  data: {},
  isLoaderVisible: false,
  error: '',
};

const movieReducers = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.MOVIE_LOADING_PROGRESS: {
      return {
        ...state,
        isLoaderVisible: true,
        error: '',
      };
    }
    case actionTypes.MOVIE_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoaderVisible: false,
        error: '',
      };
    }
    case actionTypes.MOVIE_ERROR: {
      return {
        ...state,
        isLoaderVisible: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default movieReducers;
