import profileReducer, { addPostCreator, deletePost } from './profile-reducer'

let initialState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 10}
    ],
    profile: null,
    status: ''
}

test('length of posts should be incremented', () => {
    let action = addPostCreator('newRandomText')
    let newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(3)
});

test('message of new post should be correct', () => {
    let action = addPostCreator('newRandomText')
    let newState = profileReducer(initialState, action)
    expect(newState.posts[2].message).toBe('newRandomText')
});

test('likes count of new post should be 0', () => {
    let action = addPostCreator('newRandomText')
    let newState = profileReducer(initialState, action)
    expect(newState.posts[2].likesCount).toBe(0)
});

test('after deleting length of messages should be decremented', () => {
    let action = deletePost(1)
    let newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(1)
});

test(`after deleting length of messages shouldn't be decremented if postId is incorrect`, () => {
    let action = deletePost(1000)
    let newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(2)
});
