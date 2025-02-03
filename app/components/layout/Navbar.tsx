import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between">
      <header className="text-5xl font-black">modo</header>
      <input
        className="rounded-xl outline outline-slate-400 px-4 p-1 w-[500px]"
        placeholder="Search for walking shoes, running, leisure..."
      />
      <ul className="flex gap-8">
        <li>
          <NavLink className="nav-link" to={'/'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to={'/products'}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to={'/'}>
            New
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to={'/'}>
            Support
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
