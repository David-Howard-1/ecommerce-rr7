import { Heart, ShoppingCart } from 'lucide-react';
import {
  useContext,
  type ButtonHTMLAttributes,
  type FC,
  type PropsWithChildren,
} from 'react';
import { UserContext } from '~/routes/layout-main';

export default function NavbarUser() {
  const context = useContext(UserContext);
  if (context) {
    const { user, setUser } = context;

    return user ? (
      <div className="flex items-center gap-4">
        <ShoppingCart />
        <div className="relative">
          <Heart />
          {user.favorites.length > 0 ? (
            <span className="absolute top-0 right-0 rounded-full bg-white text-[10px] font-bold p-[1px]">
              {user.favorites.length}
            </span>
          ) : null}
        </div>
        <Button onClick={() => setUser(null)}>Logout</Button>
      </div>
    ) : (
      <Button onClick={() => setUser({ id: 1, name: 'David', favorites: [] })}>
        Login
      </Button>
    );
  } else {
    return <p>No user context</p>;
  }
}

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

const Button: FC<TButton> = ({ children, ...props }) => {
  return (
    <button className="font-bold cursor-pointer" {...props}>
      {children}
    </button>
  );
};
