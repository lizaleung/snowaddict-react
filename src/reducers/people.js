import {
  PEOPLE_PAGE_LOADED,
  PEOPLE_PAGE_UNLOADED,
  PROFILE_DISPLAY_FOLLOWED,
  PROFILE_DISPLAY_UNFOLLOWED,
  PEOPLE_PAGE_GEAR_SECTION_LOADED,
  PEOPLE_PAGE_GEAR_SECTION_UNLOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case PEOPLE_PAGE_LOADED:
      return {
        ...action.payload
      };
    case PEOPLE_PAGE_UNLOADED:
      return {};
    case PEOPLE_PAGE_GEAR_SECTION_LOADED:
      return {
        ...action.payload
      };
    case PEOPLE_PAGE_GEAR_SECTION_UNLOADED:
      return {};
    case PROFILE_DISPLAY_FOLLOWED:
    case PROFILE_DISPLAY_UNFOLLOWED:
      return {
        // ...state,
        // articles: state.articles.map(article => {
        //   if (article.slug === action.payload.article.slug) {
        //     return {
        //       ...article,
        //       favorited: action.payload.article.favorited,
        //       favoritesCount: action.payload.article.favoritesCount
        //     };
        //   }
        //   return article;
        // })
      };

    default:
      return state;
  }
};
