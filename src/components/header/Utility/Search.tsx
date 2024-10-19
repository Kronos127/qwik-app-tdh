// components/header/Utility/Search.tsx
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
      <span class="sr-only">Search</span>
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </a>
  );
});
