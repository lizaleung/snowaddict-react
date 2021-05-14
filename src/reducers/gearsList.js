import {
  GEARS_LIST_PAGE_LOADED,
  GEARS_LIST_PAGE_UNLOADED,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case GEARS_LIST_PAGE_LOADED:
      return {
        ...state,
        gears: action.payload.gears
      };
    case GEARS_LIST_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
