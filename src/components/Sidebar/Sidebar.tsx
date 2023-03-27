import { component$ } from "@builder.io/qwik";

export const Sidebar = component$(() => {
  return (
    <div class="h-full px-4 py-8 flex flex-col items-center gap-4">
      <div class="bg-red-500 w-16 h-16"></div>
      <div class="bg-green-800 w-16 h-16"></div>
    </div>
  );
});

export default Sidebar;
