import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div/>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
