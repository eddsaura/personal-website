import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Footer from "~/components/footer/footer";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="page">
      <main>
        <Slot />
      </main>
      <div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
});
