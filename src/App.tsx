import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AboutMe } from './pages/AboutMe'
import { Hackathon } from './pages/Hackathon'
import { Projects } from './pages/Projects'
import { Others } from './pages/Others'

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </Router>
  )
} 