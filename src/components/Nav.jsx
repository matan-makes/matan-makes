import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/privacy', label: 'Privacy' },
  ]

  return (
    <nav>
      <ul className="flex gap-6 m-0 p-0 list-none">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={`text-[15px] no-underline hover:text-rose ${
                location.pathname === to
                  ? 'text-rose font-semibold'
                  : 'text-cloud'
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
