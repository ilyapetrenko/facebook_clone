import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello', likesCount: 12},
                {id: 2, message: 'Its my first post', likesCount: 10}
            ],
            newPostText: ''},
        dialogsPage: {
            dialogs:  [
                {id: 1, name: 'Ilya'},
                {id: 2, name: 'Fedor'},
                {id: 3, name: 'Denis'},
                {id: 4, name: 'Max'},
                {id: 5, name: 'Ivan'},
                {id: 6, name: 'Bogdan'}
            ],
            messages:  [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Bye'},
                {id: 4, message: 'How are you?'},
                {id: 5, message: 'Ok'},
                {id: 6, message: 'Wassup'},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {},
    getState(){
        return this._state
    },
    subscribe (observer)  {
        this._callSubscriber = observer
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store
window.store = store