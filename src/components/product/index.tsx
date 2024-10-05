import { component$, Resource } from '@builder.io/qwik';
import { useResource$ } from '@builder.io/qwik';
export const Products = component$(() => {
  const productsResource = useResource$(async () => {
    // Fetch products from Medusa API
    const res = await fetch('https://tdh-app-2gldk.ondigitalocean.app/app/a/products');
    const data = await res.json();
    return data.products; // Assuming products are in `products` array
  });

  return (
    <Resource
      value={productsResource}
      onPending={() => <div>Loading...</div>}
      onResolved={(products) => (
        <div>
          {products.map((product: any) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      )}
      onRejected={() => <div>Error loading products</div>}
    />
  );
});

export default Products;

