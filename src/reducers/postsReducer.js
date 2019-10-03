import { GET_ALL_POSTS_SUCCESS } from "../actions/actionTypes"

export const getPostsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_POSTS_SUCCESS:
            return [...state, action.payload]

        default: return state
    }
}