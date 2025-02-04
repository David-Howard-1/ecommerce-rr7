import { Search } from 'lucide-react';
import type { FC } from 'react';
import { Form, Link, NavLink, type NavLinkProps } from 'react-router';

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between">
      <header className="text-5xl font-black">
        <Link to="/">modo</Link>
      </header>
      <Form className="flex items-center gap-2">
        <input
          className="rounded-xl outline outline-slate-400 px-4 leading-9 w-[500px] transition-all hover:outline-slate-600 focus:outline-2 focus:outline-slate-600 placeholder:text-slate-400"
          placeholder="Search for walking shoes, running, leisure..."
        />
        <button>{<Search size={20} className="text-slate-600" />}</button>
      </Form>
      <ul className="flex gap-8">
        <li>
          <NavbarLink to="/">Home</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/all">Shop</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/new">New</NavbarLink>
        </li>
        <li>
          <NavbarLink to="/support">Support</NavbarLink>
        </li>
      </ul>
    </nav>
  );
}

type TNavbarLink = NavLinkProps;

const NavbarLink: FC<TNavbarLink> = ({ children, ...props }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        ['nav-link', isActive ? 'border-b bg-slate-50' : ''].join(' ')
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};
