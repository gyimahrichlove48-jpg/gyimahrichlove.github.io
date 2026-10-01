import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Journey from './pages/Journey'
import Skills from './pages/Skills'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App