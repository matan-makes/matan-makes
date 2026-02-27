import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <p>
        © {year} matan-makes. <Link to="/privacy">Privacy</Link>.
      </p>
    </footer>
  )
}

export default Footer
