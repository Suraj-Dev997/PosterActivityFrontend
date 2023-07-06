import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { IdContextProvider } from './components/contextapi/IdContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <IdContextProvider>
   <App />

   </IdContextProvider>
   </BrowserRouter>
  </React.StrictMode>,
)
