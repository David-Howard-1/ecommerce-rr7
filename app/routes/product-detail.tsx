import type { Route } from '../+types/root';

export default function ProductDetails({ params }: Route.ComponentProps) {
  return (
    <>
      <div>Product details!</div>
      <p>{JSON.stringify(params)}</p>
    </>
  );
}
