import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import AddPostForm from './AddPostForm'

const MyPosts = React.memo(props => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    // let newPostElement = React.createRef()

    // let onAddPost = () => {
    //     props.addPost()
    // }
    //
    // let onPostChange = () => {
    //     let text = newPostElement.current.value
    //     props.updateNewPostText(text)
    // }

    return (
        <div className={classes.postsBlock}>
            <AddPostForm addPost={props.addPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>)
})

export default MyPosts