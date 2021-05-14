import {
  PEOPLE_PAGE_LOADED,
  PEOPLE_PAGE_UNLOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case PEOPLE_PAGE_LOADED:
      return {
        ...action.payload
      };
    case PEOPLE_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
