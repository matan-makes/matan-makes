import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-6 py-6 bg-navy text-sm text-cloud/70">
      <p className="m-0">
        &copy; {year}. <Link to="/privacy" className="text-steel no-underline hover:text-rose hover:underline">Privacy Policy</Link>.
      </p>
    </footer>
  )
}

export default Footer
