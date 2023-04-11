import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Footer from "~/components/Footer/Footer";
import Sidebar from "~/components/Sidebar/Sidebar";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <div class="page grid grid-cols-main-layout-closed bg-radial-main-gradient from-primary-600 to-transparent">
        <Sidebar />
        <main class="px-8 col-start-2 pt-36 min-h-screen w-full max-w-screen-lg mx-auto">
          <Slot />
        </main>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
});
