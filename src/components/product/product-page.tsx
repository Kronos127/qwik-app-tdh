import { component$, useSignal } from '@builder.io/qwik';

export const ProductComponent = component$(() => {
  const selectedImage = useSignal('https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-01.jpg');
  const images = [
    'https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-01.jpg',
    // Add more image URLs here...
  ];

  return (
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <div class="flex flex-col-reverse">
            {/* Image selector */}
            <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <div class="grid grid-cols-4 gap-6" role="tablist">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick$={() => (selectedImage.value = image)}
                    class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    role="tab"
                    type="button"
                  >
                    <span class="sr-only">Image {index + 1}</span>
                    <span class="absolute inset-0 overflow-hidden rounded-md">
                      <img src={image} alt={`Product image ${index + 1}`} class="h-full w-full object-cover object-center" />
                    </span>
                    <span
                      class={`pointer-events-none absolute inset-0 rounded-md ring-2 ${
                        selectedImage.value === image ? 'ring-indigo-500' : 'ring-transparent'
                      } ring-offset-2`}
                      aria-hidden="true"
                    ></span>
                  </button>
                ))}
              </div>
            </div>

            <div class="aspect-h-1 aspect-w-1 w-full">
              <div role="tabpanel">
                <img
                  src={selectedImage.value}
                  alt="Selected product view"
                  class="h-full w-full object-cover object-center sm:rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Product info */}
          <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">Zip Tote Basket</h1>

            <div class="mt-3">
              <p class="text-3xl tracking-tight text-gray-900">$140</p>
            </div>

            {/* Reviews */}
            <div class="mt-3">
              <div class="flex items-center">
                <div class="flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} class="h-5 w-5 flex-shrink-0 text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  ))}
                  <svg class="h-5 w-5 flex-shrink-0 text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p class="sr-only">4 out of 5 stars</p>
              </div>
            </div>

            <div class="mt-6">
              <div class="space-y-6 text-base text-gray-700">
                <p>
                  The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, shoulder sling, or
                  backpack this convenient and spacious bag.
                </p>
              </div>
            </div>

            <form class="mt-6">
              <div>
                <h3 class="text-sm font-medium text-gray-600">Color</h3>
                <fieldset class="mt-2">
                  <div class="flex items-center space-x-3">
                    <label class="relative flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-700 focus:outline-none">
                      <input type="radio" name="color-choice" value="Washed Black" class="sr-only" />
                      <span class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-700"></span>
                    </label>
                    <label class="relative flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                      <input type="radio" name="color-choice" value="White" class="sr-only" />
                      <span class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white"></span>
                    </label>
                    <label class="relative flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-500 focus:outline-none">
                      <input type="radio" name="color-choice" value="Washed Gray" class="sr-only" />
                      <span class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-500"></span>
                    </label>
                  </div>
                </fieldset>
              </div>

              <div class="mt-10 flex">
                <button
                  type="submit"
                  class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Add to bag
                </button>
                <button type="button" class="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                  <svg class="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  <span class="sr-only">Add to favorites</span>
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" class="mt-12">
              <div class="divide-y divide-gray-200 border-t">
                <div>
                  <h3>
                    <button type="button" class="group relative flex w-full items-center justify-between py-6 text-left">
                      <span class="text-sm font-medium text-gray-900">Features</span>
                      <span class="ml-6 flex items-center">
                        <svg class="block h-6 w-6 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <svg class="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div class="prose prose-sm pb-6">
                    <ul role="list">
                      <li>Multiple strap configurations</li>
                      <li>Spacious interior with top zip</li>
                      <li>Leather handle and tabs</li>
                      <li>Interior dividers</li>
                      <li>Stainless strap loops</li>
                      <li>Double stitched construction</li>
                      <li>Water-resistant</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
});
