import {
  BLOG_LIST_LOADED,
  BLOG_LIST_UNLOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {

    case BLOG_LIST_LOADED:
      return {
        ...state,
        pager: action.pager,
        tags: action.payload[0].tags,
        articles: action.payload[1].articles,
        articlesCount: action.payload[1].articlesCount,
        currentPage: 0,
        tab: action.tab
      };
    case BLOG_LIST_UNLOADED:
      return {};
    default:
      return state;
  }
};
