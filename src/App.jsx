import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
// import Resume from './pages/Resume'  
import Privacy from './pages/Privacy'
import './index.css'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {
  return (
    <BrowserRouter basename={basename}>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
