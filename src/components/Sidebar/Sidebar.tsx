import { component$ } from "@builder.io/qwik";

export const Sidebar = component$(() => {
  return (
    <navbar class="h-full px-4 py-8 flex flex-col items-center gap-4 fixed">
      <div class="bg-red-500 w-16 h-16"></div>
      <div class="bg-green-800 w-16 h-16"></div>
    </navbar>
  );
});

export default Sidebar;
