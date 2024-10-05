import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Video } from "../components/video/Video";
import { Products } from '../components/product/';

export default component$(() => {
  return (
    <>
      <Video />
      <h1>Welcome to Terris Draheim Outdoor</h1>
      <div>
        <h1>Product List</h1>
        <Products />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Terris Draheim Outdoor",
  meta: [
    {
      name: "description",
      content: "Terris Draheim Outdoor is a furniture store that specializes in outdoor furniture. We are committed to providing high-quality furniture that is both beautiful and durable.",
    },
  ],
};
