import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/app/layout'
import { AboutMe } from './pages/AboutMe'
import { History } from './pages/History'
import { Projects } from './pages/Projects'
import { Others } from './pages/Others'

export function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about-me" element={<Navigate to="/" replace />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/history" element={<History />} />
          <Route path="/others" element={<Others />} />
        </Routes>
      </Layout>
    </Router>
  )
} 
