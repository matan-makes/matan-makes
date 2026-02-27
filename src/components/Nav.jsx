import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/resume', label: 'Resume' },
    { to: '/privacy', label: 'Privacy' },
  ]

  return (
    <nav className="site-nav">
      <ul>
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} className={location.pathname === to ? 'active' : ''}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
