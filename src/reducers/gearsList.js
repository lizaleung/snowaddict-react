import {
  GEARS_LIST_PAGE_LOADED,
  GEARS_LIST_PAGE_UNLOADED,
  GEARS_LIST_SET_PAGE,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case GEARS_LIST_PAGE_LOADED:
      return {
        ...state,
        gears: action.payload.gears,
        gearsCount: action.payload.gearsCount,
        currentPage: 0
      };
    case GEARS_LIST_PAGE_UNLOADED:
      return {};
    case GEARS_LIST_SET_PAGE:
      return {
        ...state,
        gears: action.payload.gears,
        gearsCount: action.payload.gearsCount,
        currentPage: action.page
      };

    default:
      return state;
  }
};
