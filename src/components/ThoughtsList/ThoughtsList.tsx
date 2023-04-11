import { component$ } from "@builder.io/qwik";
import type { Post } from "~/types/posts/Posts";

export const ThoughtsList = component$<{ posts: Post[] }>(({ posts }) => {
  return (
    <div class="flex w-full">
      <ul class="w-full">
        {posts.map((post, i) => (
          <>
            <ListItem key={post.id} post={post} />
            {i !== posts.length - 1 && (
              <hr class="w-2/4 mx-auto opacity-25 bg-primary-100" />
            )}
          </>
        ))}
      </ul>
    </div>
  );
});

const ListItem = component$<{ post: Post }>(({ post }) => {
  const { title, slug, date } = post;
  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <li>
      <a href={`/thoughts/${slug}`}>
        <div class="inline rounded-xl py-4 px-6 ">
          <h3>{title}</h3>
          <p>{formatedDate}</p>
        </div>
      </a>
    </li>
  );
});
