import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Privacy from './pages/Privacy'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {
  return (
    <BrowserRouter basename={basename}>
      <div className="flex flex-col min-h-screen bg-cloud text-navy font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
