import products from './products.json';
import type { Shoe } from './types';

export type Response = {
  data?: Shoe[];
  error?: {
    message: string;
  };
};

export const getProducts = (
  key?: keyof Shoe,
  value?: string | number
): Promise<Response> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        // Return all products if no key/value provided
        if (!key || value === undefined) {
          resolve({ data: products });
          return;
        }

        // Otherwise, return filtered data
        const filteredProducts = products.filter(
          (product) => product[key] === value
        );

        // Check for data presence
        if (filteredProducts.length === 0) {
          resolve({
            data: [],
            error: { message: `No shoes found matching ${key}: ${value}` },
          });
          return;
        }

        // Return filtered data
        resolve({ data: filteredProducts });
      } catch (error) {
        resolve({
          data: [],
          error: {
            message: 'An unexpected error occurred while fetching shoes.',
          },
        });
      }
    }, 1000);
  });
};

export const db = {
  getProducts,
};
