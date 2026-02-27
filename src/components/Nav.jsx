import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/privacy", label: "Privacy" },
    { to: "https://github.com/matan-makes", label: "GitHub", external: true },
    { to: "/fun", label: "Fun" },
  ];

  const linkClass = (to) =>
    `text-[15px] no-underline hover:text-rose ${
      location.pathname === to ? "text-rose font-semibold" : "text-cloud"
    }`;

  return (
    <nav>
      <ul className="flex gap-6 m-0 p-0 list-none">
        {links.map(({ to, label, external }) => (
          <li key={to}>
            {external ? (
              <a
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass(to)}
              >
                {label}
              </a>
            ) : (
              <Link to={to} className={linkClass(to)}>
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
