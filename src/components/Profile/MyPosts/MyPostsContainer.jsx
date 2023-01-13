import React from 'react'
import { updateNewPostTextCreator, addPostCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        // updateNewPostText: (text) => {
        //     let action = updateNewPostTextCreator(text)
        //     dispatch(action)
        // },
        addPost: (body) => {
            dispatch(addPostCreator(body))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer