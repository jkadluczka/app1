
import { combineReducers } from 'redux';

import { getPostsReducer } from './postsReducer'

export default combineReducers({
  getAllPosts: getPostsReducer
})