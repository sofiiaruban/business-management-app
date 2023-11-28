import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import {store} from './store/store.ts'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
    <ToastContainer position="bottom-left" autoClose={2000}/>
  </Provider>,
)
