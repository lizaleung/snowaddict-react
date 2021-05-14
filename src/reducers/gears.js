import {
  GEARS_PAGE_LOADED,
  GEARS_PAGE_UNLOADED,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case GEARS_PAGE_LOADED:
      return {
        ...state,
        peoples: action.payload[0].peoples,
        categories: action.payload[1].categories
      };
    case GEARS_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
