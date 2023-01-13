import { profileAPI, usersAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
//после перехода на формик перестало быть нужным записывать изменения ибо формик сам хранит данные
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

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
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0){
            dispatch(setStatus(status))
            }
        })
}

export default profileReducer