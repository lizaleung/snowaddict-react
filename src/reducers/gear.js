import {
  GEAR_ITEM_PAGE_LOADED,
  GEAR_ITEM_PAGE_UNLOADED,
  CHANGE_DETAIL_TAB,
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
    default:
      return state;
  }
};
