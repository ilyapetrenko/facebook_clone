import React from 'react'
import './index.css'
import reportWebVitals from './reportWebVitals'
import store from './redux/redux-store'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'))

// setInterval(() => {
//     store.dispatch({type: 'FAKE'})
// }, 1000)

root.render(
    <Provider store={store}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </Provider>
)

reportWebVitals()