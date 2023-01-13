import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import { Navigate } from 'react-router-dom'
import AddMessageForm from './AddMessageForm'

const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id= {dialog.id} />  )
    let messagesElements = state.messages.map(message => <Message message = {message.message} key={message.id}  />  )
    // let newMessageBody = state.newMessageBody
    //
    // let onSendMessageClick = () => {
    //     props.sendMessage()
    // }
    // let onNewMessageChange = (event) => {
    //     let body = event.target.value
    //     props.updateNewMessageBody(body)
    // }
    if(props.isAuth === false) return <Navigate to={'/login'}/>
    return (
       <div className={classes.dialogs}>
           <div className={classes.dialogsItems}>
               {dialogsElements}
           </div>
           <div className={classes.messages}>
               <div>{messagesElements}</div>
               <AddMessageForm sendMessage={props.sendMessage}/>
           </div>
       </div>
    )
}

export default Dialogs