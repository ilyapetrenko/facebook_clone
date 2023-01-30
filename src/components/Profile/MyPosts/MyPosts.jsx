import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import AddPostForm from './AddPostForm'

class MyPosts extends React.PureComponent {
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return nextProps != this.props || nextState != this.state
    // }

    render() {
        let postsElements = this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
                <AddPostForm addPost={this.props.addPost}/>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>)
    }
}

export default MyPosts