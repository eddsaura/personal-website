import { Slot, component$ } from "@builder.io/qwik";

export const SidebarItem = component$(() => {
  return (
    <li>
      <div class="border bg-pr border-primary-100 border-opacity-60 rounded-lg p-1 w-10 h-10 flex items-center justify-center">
        <Slot />
      </div>
    </li>
  );
});
