import { Link } from 'react-router-dom'
import Nav from './Nav'

function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between flex-wrap gap-4 h-14 px-6 bg-navy">
      <Link to="/" className="font-bold text-lg text-cloud no-underline hover:text-rose hover:no-underline">
        matan makes
      </Link>
      <Nav />
    </header>
  )
}

export default Header
