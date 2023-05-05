import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { AboutMe } from "~/components/AboutMe/AboutMe";
import Now from "~/components/Now/Now";
import { ThoughtsList } from "~/components/ThoughtsList/ThoughtsList";
import contentfulFetch from "~/lib/contentful-fetch";
import type { Post } from "~/types/posts/Posts";

export default component$(() => {
  // const formattedPosts = (): Post[] => {
  //   const signal = useGetPosts();

  //   return signal.value.items.map((post: any) => {
  //     return {
  //       ...post,
  //       date: post.sys.firstPublishedAt,
  //     };
  //   });
  // };

  // const posts = formattedPosts();

  return (
    <>
      <AboutMe />

      <Now />

      {/* <section>
        <h2 class="text-xl italic">Thoughts</h2>
        <ThoughtsList posts={posts} />
      </section> */}
    </>
  );
});

export const useGetPosts = routeLoader$(async ({ fail }) => {
  const query = `
  query {
    blogPostCollection {
      
      items {
        slug
        title

        sys {
          firstPublishedAt
        } 
      }
    }
  }
  `;
  try {
    const response = await contentfulFetch(query);
    const data = await response.json();
    if (response.ok) {
      return data.data.blogPostCollection;
    }
    return fail(response.status, {
      message: response.statusText,
    });
  } catch (error) {
    console.log(error);
    return fail(500, {
      message: "Internal server error",
    });
  }
});
