import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from '@/app/layout'
import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Layout>
      {<App />}
    </Layout> */}
    <App />
  </StrictMode>,
)