import {
  GEAR_ITEM_PAGE_LOADED,
  GEAR_ITEM_PAGE_UNLOADED,
  CHANGE_DETAIL_TAB,
  GEAR_FOLLOW,
  GEAR_UNFOLLOW
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case GEAR_ITEM_PAGE_LOADED:
      return {
        ...state,
        gear: action.payload.gear
      };
    case CHANGE_DETAIL_TAB:
      return {
        ...state,
        pager: action.pager,
        data: action.payload.profiles,
        tab: action.tab,
        currentPage: 0
      };
    case GEAR_ITEM_PAGE_UNLOADED:
      return {};
    case GEAR_FOLLOW:
      return {
        ...state,
        gear: action.payload
      }
    case GEAR_UNFOLLOW:
      return {
        ...state,
        gear: action.payload
      };
    default:
      return state;
  }
};
