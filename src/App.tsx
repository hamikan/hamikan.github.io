import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/app/layout'
import { Home } from './pages/Home'
import { AboutMe } from './pages/AboutMe'
import { History } from './pages/History'
import { Projects } from './pages/Projects'
import { Others } from './pages/Others'

export function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/history" element={<History />} />
          <Route path="/others" element={<Others />} />
        </Routes>
      </Layout>
    </Router>
  )
} 
