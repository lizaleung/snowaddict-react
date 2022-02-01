import {
  BLOG_LIST_LOADED,
  BLOG_LIST_UNLOADED,
  BLOG_POST_FAVORITED,
  BLOG_POST_UNFAVORITED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case BLOG_POST_FAVORITED:
    case BLOG_POST_UNFAVORITED:
      return {
        ...state,
        articles: state.articles.map(article => {
          if (article.slug === action.payload.article.slug) {
            return {
              ...article,
              favorited: action.payload.article.favorited,
              favoritesCount: action.payload.article.favoritesCount
            };
          }
          return article;
        })
      };
    case BLOG_LIST_LOADED:
      return {
        ...state,
        pager:         action.pager,
        tags:          action.payload[0].tags,
        articles:      action.payload[1].articles,
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
