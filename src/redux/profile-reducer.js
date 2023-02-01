import { profileAPI, usersAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
//после перехода на формик перестало быть нужным записывать изменения ибо формик сам хранит данные
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    posts: [
    {id: 1, message: 'Hello', likesCount: 12},
    {id: 2, message: 'Its my first post', likesCount: 10}
],
    //newPostText: '',
    profile: null,
    status: ''
}
//это для параметра по умолчанию что бы приходил хоть какой-то стейт

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.body,
                likesCount: 0
            }
            let stateCopy = {
                ...state,
                posts : [...state.posts, newPost],
                // newPostText : ''
            }
            return stateCopy
        }
        // case UPDATE_NEW_POST_TEXT: {
        //     let stateCopy = {
        //         ...state,
        //         newPostText : action.newText
        //     }
        //     return stateCopy
        // }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        default:
            return state
    }
}
export const addPostCreator = (body) => {
    return {
        type: ADD_POST, body: body
    }
}
// export const updateNewPostTextCreator = (text) => {
//     return {
//         type: UPDATE_NEW_POST_TEXT, newText: text
//     }
// }
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}
export const deletePost = (postId) => {
    return {
        type: DELETE_POST, postId
    }
}
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0){
        dispatch(setStatus(status))
    }
}

export default profileReducer