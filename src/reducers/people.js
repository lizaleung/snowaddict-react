import {
  PEOPLE_PAGE_LOADED,
  PEOPLE_PAGE_UNLOADED,
  PROFILE_DISPLAY_LOADED,
  PROFILE_DISPLAY_UNLOADED,
  PROFILE_DISPLAY_FOLLOWED,
  PROFILE_DISPLAY_UNFOLLOWED,
  PEOPLE_PAGE_GEAR_SECTION_LOADED,
  PEOPLE_PAGE_GEAR_SECTION_UNLOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case PEOPLE_PAGE_LOADED:
      return {
        ...state,
        ...action.payload
        };
    case PEOPLE_PAGE_UNLOADED:
      return {};
    case PROFILE_DISPLAY_LOADED:
      return {
        ...state,
        person: action.payload.peoples[0]
        };
    case PROFILE_DISPLAY_UNLOADED:
      return {};
    case PEOPLE_PAGE_GEAR_SECTION_LOADED:
      return {
        ...state,
        ...action.payload
      };
    case PEOPLE_PAGE_GEAR_SECTION_UNLOADED:
      return {};
    case PROFILE_DISPLAY_FOLLOWED:
      return {
        ...state,
        person: action.payload
      }
    case PROFILE_DISPLAY_UNFOLLOWED:
      return {
        ...state,
        person: action.payload
      };
    default:
      return state;
  }
};
