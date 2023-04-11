import { component$ } from "@builder.io/qwik";
import { Arrow } from "~/components/svg/Arrow/Arrow";
import { SocialItem } from "~/components/SocialItem/SocialItem";

export default component$(() => {
  return (
    <footer class="text-primary-50 w-full border-t border-white border-opacity-5 pt-8 pb-4 grid place-items-center ">
      <div class="flex gap-x-4 mb-2">
        <SocialItem link="https://twitter.com/0xSaura">
          Twitter <Arrow />
        </SocialItem>
        <SocialItem link="https://github.com/eddsaura">
          Github <Arrow />
        </SocialItem>
        <SocialItem link="https://twitter.com/0xSaura">
          Tiktok <Arrow />
        </SocialItem>
      </div>

      <blockquote>
        “Nothing happens to anybody which he is not fitted by nature to bear.”
      </blockquote>
    </footer>
  );
});
