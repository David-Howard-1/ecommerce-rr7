import type { Route } from '../+types/root';
import type { Shoe } from 'db/types';
import { useContext, useState, type FC } from 'react';
import { Link } from 'react-router';
import shoes from 'db/products.json';
import { trimStringForURLParam } from 'lib/trimStringForURLParam';
import { Heart } from 'lucide-react';
import { UserContext } from './layout-main';

export default function ProductsHome({ params }: Route.ComponentProps) {
  const ProductsGrid = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {shoes.map((shoe) => (
          <ProductBlock key={shoe.id} product={shoe} />
        ))}
      </div>
    );
  };

  return (
    <>
      <div>{shoes ? <ProductsGrid /> : <p>No shoes found</p>}</div>
    </>
  );
}

type TProductBlock = {
  product: Shoe;
};

const ProductBlock: FC<TProductBlock> = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const productPath = trimStringForURLParam(product.name);

  const userContext = useContext(UserContext);

  const toggleFavorite = () => {
    if (userContext && userContext.user) {
      const { setUser } = userContext;

      setUser((prevUser) => {
        if (!prevUser) return prevUser;

        if (!isLiked) {
          setIsLiked(true);
          return {
            ...prevUser,
            favorites: [...prevUser.favorites, product],
          };
        } else {
          setIsLiked(false);
          return {
            ...prevUser,
            favorites: prevUser.favorites.filter(
              (fav) => fav.id !== product.id
            ),
          };
        }
      });
    }
  };

  return (
    <div className="w-72 h-96 border border-slate-300 rounded-xl flex flex-col items-center justify-start">
      <div className="relative w-full">
        <img
          className="h-64 rounded-t-xl object-cover"
          src={`${product.images[0]}`}
        />
        <button
          type="button"
          className="cursor-pointer"
          onClick={toggleFavorite}
        >
          <Heart
            className={`absolute top-0 right-0 m-3 hover:text-slate-300 text-slate-500 ${
              isLiked && ' fill-slate-500'
            }`}
          />
        </button>
      </div>
      <div className="w-full p-2">
        <p className="text-sm text-slate-400">{product.brand}</p>
        <Link
          to={`/products/${productPath}`}
          className="flex justify-between items-center"
        >
          <p className="font-bold">{product.name}</p>
          <p className="font-bold">${product.price}</p>
        </Link>
      </div>
    </div>
  );
};
