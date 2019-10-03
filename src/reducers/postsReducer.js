import { GET_ALL_POSTS_SUCCESS, GET_POST_SUCCESS } from "../actions/actionTypes"

export const getPostsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_POSTS_SUCCESS:
            return action.payload.message

        default: return state
    }
}

export const getPostReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_POST_SUCCESS:
            return action.payload[0]

        default: return state
    }
}