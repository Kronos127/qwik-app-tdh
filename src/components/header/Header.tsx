// src/components/header/Header.tsx
import { component$ } from '@builder.io/qwik';
import Logo from './Logo';  // Importing the Logo component from the same folder.
import NavMenu from './Nav/NavMenu';
import Search from './Utility/Search';
import Cart from './Utility/Cart';

export default component$(() => {
  return (
    <header class="relative bg-white">
      <nav aria-label="Top" class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0">
          <div class="flex h-16 items-center justify-between">
            <Logo />  {/* Using the Logo component */}
            <NavMenu />
            <div class="flex flex-1 items-center justify-end">
              <Search />
              <Cart />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
});
