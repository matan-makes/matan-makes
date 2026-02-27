import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Fun from './pages/Fun'

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-cloud text-navy font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/fun" element={<Fun />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
