import { NavLink } from './nav-link';

const LINKS = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/about',
    label: 'About'
  },
  {
    href: '/recipes',
    label: 'Recipes'
  }
];

export function Navigation() {
  return (
    <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
      <ul className="flex items-center gap-10">
        {LINKS.map((link) => (
          <NavLink key={link.label} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
