import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED,
HOME_PAGE_TRENDING_LOADED,HOME_PAGE_TRENDING_UNLOADED } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        tags: action.payload[0].tags
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case HOME_PAGE_TRENDING_LOADED:
      return {
        ...state,
        people: action.payload[0].peoples,
        gears:  action.payload[1].gears
      };
    case HOME_PAGE_TRENDING_UNLOADED:
      return {};

    default:
      return state;
  }
};
