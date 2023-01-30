import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/Login/Login'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import withRouter from './components/Custom/withRouter'
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'
import store from './redux/redux-store'


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
        return (
            <Provider store={store}>
                <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}/>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/users/*" element={<UsersContainer/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            {/*Благодаря навлинкам, адрес переходит на то, что мы указали в нав линке, здесь браузер чекает какой сейчас адрес и возвращает соответсвующую компоненту    */}
                        </Routes>
                    </div>
                </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
