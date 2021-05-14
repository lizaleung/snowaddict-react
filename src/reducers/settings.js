import {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  PROFILE_SETTINGS_SAVED,
  PROFILE_SETTINGS_PAGE_LOADED,
  PROFILE_SETTINGS_PAGE_UNLOADED,
  ASYNC_START
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SETTINGS_SAVED:
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      };
    case SETTINGS_PAGE_UNLOADED:
      return {};
    case PROFILE_SETTINGS_SAVED:
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      };     
    case PROFILE_SETTINGS_PAGE_LOADED:
      return {
        ...action.payload
      };       
    case PROFILE_SETTINGS_PAGE_UNLOADED:
      return {};      
    case ASYNC_START:
      return {
        ...state,
        inProgress: true
      };
    default:
      return state;
  }
};
