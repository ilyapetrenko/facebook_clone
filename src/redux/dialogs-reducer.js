//const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState =  {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        // case UPDATE_NEW_MESSAGE_BODY:
        //     stateCopy = {
        //         ...state,
        //         newMessageBody: action.body
        //     }
        //     return stateCopy
        case SEND_MESSAGE:
            //let body = state.newMessageBody
            stateCopy = {
                ...state,
                messages: [...state.messages, {id: 7, message: action.body}]
                //сейчас пуш не юзают
            }
            return stateCopy
        default:
            return state
    }
}

export const sendMessageCreator = (body) => {
    return {
        type: SEND_MESSAGE, body: body
    }
}
// export const updateNewMessageBodyCreator = (body) => {
//     return {
//         type: UPDATE_NEW_MESSAGE_BODY, body: body
//     }
// }

export default dialogsReducer