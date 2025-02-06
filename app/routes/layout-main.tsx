import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';
import { Outlet } from 'react-router';
import Navbar from '~/components/layout/Navbar';
import type { Route } from '../+types/root';
import type { Shoe } from 'db/types';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Modo: React Router e-commerce App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

type TUser = {
  id: number;
  name: string;
  favorites: Shoe[];
};

type TContext = {
  user: TUser | null;
  setUser: Dispatch<SetStateAction<TUser | null>>;
} | null;

export const UserContext = createContext<TContext>(null);

export default function LayoutMain() {
  const [user, setUser] = useState<TUser | null>({
    id: 1,
    name: 'David',
    favorites: [],
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <main className="p-24 px-52 xl:px-96">
        <Navbar />
        <div className="mt-10">
          <Outlet />
        </div>
      </main>
    </UserContext.Provider>
  );
}
