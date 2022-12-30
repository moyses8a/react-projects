import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  NEXT_PAGE,
  PREV_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  const handlePage = (v) => {
    let nextPage = state.page + v;
    if (nextPage > state.nbPages - 1) {
      nextPage = 0;
    }
    return { ...state, page: nextPage };
  }
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: true };
  } else if(action.type === SET_STORIES) {
    return {
      ...state,
      isLoading: false,
      hits: action.payload.hits,
      nbPages: action.payload.nbPages,
    }
  } else if (action.type === REMOVE_STORY) {
    return {
      ...state,
      hits: state.hits.filter((story) => story.objectID !== action.payload),
    }
  } else if (action.type === HANDLE_SEARCH) {
    return { ...state, query: action.payload, page: 0 };
  } else if (action.type === PREV_PAGE) {
    return handlePage(-1);
  } else if (action.type === NEXT_PAGE) {
    return handlePage(1);
  }
}
export default reducer
