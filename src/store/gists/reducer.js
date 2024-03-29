import {
  GET_GISTS_START,
  GET_GISTS_SUCCESS,
  GET_GISTS_ERROR,
  SEARCH_GISTS_START,
  SEARCH_GISTS_SUCCESS,
  SEARCH_GISTS_ERROR
} from "./types";

const initialState = {
  gists: [],
  errorGists: null,
  pending: false,

  gistsSearch: [],
  errorSearch: null,
  pendingSearch: false,
};

export const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_START:
      return { ...state, pending: true, errorGists: null };
    case GET_GISTS_SUCCESS:
      return { ...state, pending: false, gists: action.payload };
    case GET_GISTS_ERROR:
      return { ...state, pending: false, errorGists: action.payload };

    case SEARCH_GISTS_START:
      return { ...state, pendingSearch: true, errorSearch: null };
    case SEARCH_GISTS_SUCCESS:
      return { ...state, pendingSearch: false, gistsSearch: action.payload };
    case SEARCH_GISTS_ERROR:
      return { ...state, pendingSearch: false, errorSearch: action.payload };
    default:
      return state;
  }
};
