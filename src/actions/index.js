import axios from 'axios'
import {
  GET_ALL_POSTS_SUCCESS,
  GET_POST_SUCCESS
} from './actionTypes'

export const getAllPosts = () => (
  dispatch => (
    axios.get("http://mindz.tt.dev.mindz.pl/api/articles?api_token=jsAcgVfUdhM9YYtsQF6H")
      .then(response => {
        dispatch(getAllPostsSucess(response.data))
      })
      .catch(error => {
        throw (error)
      })
  )
)

export const getAllPostsSucess = data => {
  return{
    type: GET_ALL_POSTS_SUCCESS,
    payload: data
  }
}

export const getPost = (id) => (
  dispatch => (
    axios.get(`http://mindz.tt.dev.mindz.pl/api/articles/${id}?api_token=jsAcgVfUdhM9YYtsQF6H`)
      .then(response => {
        dispatch(getPostSucess(response.data))
      })
      .catch(error => {
        throw (error)
      })
  )
)

export const getPostSucess = data => ({
  type: GET_POST_SUCCESS,
  payload: data
})


