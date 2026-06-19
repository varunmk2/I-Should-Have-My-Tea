import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // Added this import
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap your App and configure basename for GitHub Pages */}
    <BrowserRouter basename="/I-Should-Have-My-Tea">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)