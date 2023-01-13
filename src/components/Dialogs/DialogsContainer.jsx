import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
//стейт

let mapDispatchToProps = (dispatch) => {
        return {
            // updateNewMessageBody: (body) => {
            //     dispatch(updateNewMessageBodyCreator(body))
            // },
        sendMessage: (body) => {
            dispatch(sendMessageCreator(body))
        }
    }
}
//коллбэки

//const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
//то что в первых скобках это обьекты поля которых получит компонента во вторых скобках
//в первом аргументе первой скобки мы получаем стейт из апп
//Мы говорим дайлогс перерисоваться если изменится state.dialogsPage
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)