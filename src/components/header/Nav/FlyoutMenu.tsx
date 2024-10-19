// components/header/Nav/FlyoutMenu.tsx
import { component$ } from '@builder.io/qwik';

export default component$(({ label }: { label: string }) => {
  return (
    <div class="absolute inset-x-0 top-full text-gray-500 sm:text-sm">
      <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>
      <div class="relative bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Menu content based on the label */}
          <p>{label} menu content here...</p>
        </div>
      </div>
    </div>
  );
});
