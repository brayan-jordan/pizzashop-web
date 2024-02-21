import React from 'react'
import ReactDOM from 'react-dom/client'

import { enableMsw } from './api/msw/index.ts'
import { App } from './app.tsx'

enableMsw().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
