import React from 'react'
import './index.css'
import reportWebVitals from './reportWebVitals'
import ReactDOM from 'react-dom/client'
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'))

// setInterval(() => {
//     store.dispatch({type: 'FAKE'})
// }, 1000)

root.render(
    <App/>
)

reportWebVitals()