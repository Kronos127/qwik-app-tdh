// src/components/Slider.tsx
import { component$, useSignal } from "@builder.io/qwik";

export const Slider = component$(() => {
  // Signal to track the value of the slider
  const value = useSignal(10);

  // Render the slider component
  return (
    <div class="flex flex-col items-center justify-center w-2/3 p-4">
      <label For="slider" class="text-gray-700 mb-2">
        Price: {value.value}
      </label>
      <input
        id="slider"
        type="range"
        min="0"
        max="10"
        value={value.value}
        class="w-full appearance-none h-2 bg-gray-300 rounded-lg outline-none cursor-pointer slider-thumb"
        // Update the value signal on input change
        onInput$={(e) => (value.value = (e.target as HTMLInputElement).valueAsNumber)}
      />
      {/* Custom styling for the slider thumb */}
      
    </div>
  );
});