import { db } from 'db/queries';
import type { Route } from '../+types/root';
import type { Shoe } from 'db/types';
import type { FC } from 'react';
import { Link } from 'react-router';

export async function loader({ params }: Route.LoaderArgs) {
  const { q } = params;

  if (q === 'all') {
    const response = await db.getProducts();

    return response;
  }

  const response = await db.getProducts('brand', q);
  if (response.error) {
    return response.error.message;
  }

  return response;
}

export default function ProductsHome({
  params,
  loaderData,
}: Route.ComponentProps) {
  const { q } = params;
  const { data } = loaderData;

  const ProductsGrid = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data.map((shoe) => (
          <ProductBlock key={shoe.id} product={shoe} />
        ))}
      </div>
    );
  };

  return (
    <>
      <h1>Products page!</h1>
      <p>{JSON.stringify(params)}</p>

      <div>{data ? <ProductsGrid /> : null}</div>
    </>
  );
}

type TProductBlock = {
  product: Shoe;
};

const ProductBlock: FC<TProductBlock> = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="w-72 h-96 border flex flex-col items-center justify-center"
    >
      <img src={`${product.images[0]}`} />
      <p>{product.name}</p>
    </Link>
  );
};
