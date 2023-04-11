import { component$, Slot } from "@builder.io/qwik";

interface ItemProps {
  link: string;
}

export const SocialItem = component$<ItemProps>(({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener"
      class="text-primary-50 py-1 px-4 border border-white border-opacity-20 rounded-full flex gap-x-2 items-center transition-[border] hover:border-opacity-40"
    >
      <Slot />
    </a>
  );
});
