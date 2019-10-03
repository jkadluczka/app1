import axios from 'axios'
import {
  GET_ALL_POSTS_SUCCESS,
} from './actionTypes'

export const getAllPosts = () => (
  dispatch => (
    axios.get("http://mindz.tt.dev.mindz.pl/api/articles?api_token=jsAcgVfUdhM9YYtsQF6H")
      .then(response => {
        dispatch(getAllPostsSucess(response))
      })
      .catch(error => {
        throw (error)
      })
  )
)

export const getAllPostsSucess = data => ({
  type: GET_ALL_POSTS_SUCCESS,
  payload: data
})

