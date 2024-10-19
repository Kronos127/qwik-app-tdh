// components/header/Nav/NavMenu.tsx
import { component$ } from '@builder.io/qwik';
import NavItem from './NavItem';

export default component$(() => {
  return (
    <div class="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
      <NavItem label="Women" />
      <NavItem label="Men" />
      <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Company</a>
      <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Stores</a>
    </div>
  );
});
