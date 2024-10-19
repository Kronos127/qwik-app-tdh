// src/routes/index.tsx
import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

// Import components
import { Video } from '../components/video/Video';
import { Slider } from '../components/slider/Slider';

export default component$(() => {
  return (
    <div class="bg-white">
      <main>
        <Video />  {/* Video component, could be a promotional or intro video */}
        <h1>Welcome to Terris Draheim Outdoor Store</h1>
        <section>
        </section>
        <Slider />  {/* Image or product slider component */}
      </main>
    </div>
  );
});

// Document head with SEO meta tags
export const head: DocumentHead = {
  title: "Welcome to Terris Draheim Outdoor",
  meta: [
    {
      name: "description",
      content: "Terris Draheim Outdoor is a furniture store that specializes in outdoor furniture. We are committed to providing high-quality furniture that is both beautiful and durable.",
    },
  ],
};
