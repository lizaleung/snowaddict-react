import article from './reducers/article';
import articleList from './reducers/articleList';
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import editor from './reducers/editor';
import home from './reducers/home';
import profile from './reducers/profile';
import people from './reducers/people';
import gear from './reducers/gear';
import gears from './reducers/gears';
import gearsList from './reducers/gearsList';
import blogList from './reducers/blogList';
import settings from './reducers/settings';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  article,
  articleList,
  auth,
  blogList,
  common,
  editor,
  home,
  profile,
  people,
  settings,
  gear,
  gears,
  gearsList,
  router: routerReducer
});
