import {
  PEOPLE_PAGE_LOADED,
  PEOPLE_PAGE_UNLOADED,
  PEOPLE_PAGE_APPLY_FILTER,
  PROFILE_DISPLAY_LOADED,
  PROFILE_DISPLAY_UNLOADED,
  PROFILE_DISPLAY_FOLLOWED,
  PROFILE_DISPLAY_UNFOLLOWED,
  PEOPLE_PAGE_GEAR_SECTION_LOADED,
  PEOPLE_PAGE_GEAR_SECTION_UNLOADED,
  PEOPLE_ADD_GEAR_SECTION_LOADED,
  PEOPLE_ADD_GEAR_SECTION_UNLOADED,
  PEOPLE_ADD_GEAR_GET_GEAR_LIST,
  PEOPLE_ADD_GEAR_ADD_GEAR
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case PEOPLE_PAGE_LOADED:
      return {
        ...state,
        ...action.payload,
        };
    case PEOPLE_PAGE_UNLOADED:
      return {};
    case PEOPLE_PAGE_APPLY_FILTER:
      return {
        ...state,
        ...action.payload,
        filterTag: action.filterTag
        };
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
    case PEOPLE_ADD_GEAR_SECTION_LOADED:
      return {
        ...state,
        brands: action.payload.brands
      };
    case PEOPLE_ADD_GEAR_SECTION_UNLOADED:
      return {};
    case PEOPLE_ADD_GEAR_GET_GEAR_LIST:
      return {
        ...state,
        gears: action.payload.gears
      };
    case PEOPLE_ADD_GEAR_ADD_GEAR:
      return {

      };
    default:
      return state;
  }
};
