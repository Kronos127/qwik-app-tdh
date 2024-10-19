// src/components/header/Logo.tsx
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="flex flex-1">
      <a href="/">
        <span class="sr-only">Your Company</span>
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company Logo"
        />
      </a>
    </div>
  );
});
