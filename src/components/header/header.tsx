import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./global.css?inline";

export default component$(() => {
  return (
    <header>
      <nav>
       <Link href="/"><img src="/logo.png" alt="Logo"/> </Link>
      <div class="container">
      <ul>
        <li>
          <Link href="/furniture/" target="_blank">
            Furniture
          </Link>
        </li>
        <li>
          <Link href="/amenities/" target="_blank">
            Amenities
          </Link>
        </li>
        <li>
          <Link href="/decor-and-accessories/" target="_blank">
            Decor & Accessories
          </Link>
        </li>
        <li>
          <Link href="/brands" target="_blank">
            Brands
          </Link>
        </li>
        <li>
          <Link href="/quick-ship/" target="_blank">
            Quick Ship
          </Link>
        </li>
        <li>
          <Link href="https://store.terrisdraheim.com/inspiration/" target="_blank">
            Inspiration
          </Link>
        </li>
      </ul>
      </div>
      </nav>
    </header>
  );
});
