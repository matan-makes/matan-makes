import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <p>
        © {year}. <Link to="/privacy">Privacy Policy</Link>.
      </p>
    </footer>
  )
}

export default Footer
