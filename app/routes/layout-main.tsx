import { Outlet } from 'react-router';
import Navbar from '~/components/layout/Navbar';

export default function LayoutMain() {
  return (
    <main className="p-24 px-52 xl:px-96">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </main>
  );
}
