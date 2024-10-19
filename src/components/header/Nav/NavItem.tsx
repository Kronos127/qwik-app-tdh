// components/header/Nav/NavItem.tsx
import { component$, useSignal } from '@builder.io/qwik';
import FlyoutMenu from './FlyoutMenu';

export default component$(({ label }: { label: string }) => {
  const isOpen = useSignal(false);

  return (
    <div class="relative flex">
      <button
        type="button"
        class={`relative z-10 -mb-px flex items-center border-b-2 ${isOpen.value ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800'} pt-px text-sm font-medium transition-colors duration-200 ease-out`}
        onClick$={() => (isOpen.value = !isOpen.value)}
        aria-expanded={isOpen.value}
      >
        {label}
      </button>
      {isOpen.value && <FlyoutMenu label={label} />}
    </div>
  );
});
