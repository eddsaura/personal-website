import { component$ } from "@builder.io/qwik";
import { SidebarItem } from "./SidebarItem";
import { Diamond } from "../svg/Diamond/Diamond";
import { Smiley } from "../svg/Smiley/Smiley";
import { Book } from "../svg/Book/Book";

export const Sidebar = component$(() => {
  return (
    <navbar class="h-full px-4 py-8 fixed">
      <ul class="flex flex-col items-center gap-4 ">
        <SidebarItem>
          <Smiley />
        </SidebarItem>
        <SidebarItem>
          <Book />
        </SidebarItem>
        <SidebarItem>
          <Diamond />
        </SidebarItem>
      </ul>
    </navbar>
  );
});

export default Sidebar;
