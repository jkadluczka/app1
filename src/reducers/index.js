
import { combineReducers } from 'redux';

import { getPostsReducer, getPostReducer } from './postsReducer'

export default combineReducers({
  posts: getPostsReducer,
  post: getPostReducer
})