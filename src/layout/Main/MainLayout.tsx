import { component$, Slot } from "@builder.io/qwik";

export const MainLayout = component$(() => {
  return (
    <div class="grid grid-cols-main-layout-closed">
      <Slot />
    </div>
  );
});
