import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import contentfulFetch from "~/lib/contentful-fetch";
import { PostBody } from "./post-body";

export default component$(() => {
  const postSignal = useGetPost();
  const post = postSignal.value;
  return (
    <article>
      <PostBody content={post.content} />
    </article>
  );
});

export const useGetPost = routeLoader$(async ({ params, fail }) => {
  const query = `query {
    blogPostCollection(where:{slug:"${params.slug}"}) {
     items {
      title
      sys {
        firstPublishedAt
      }
      
      content {
        json
       
      }
      
    } 
    }
  }`;

  try {
    const response = await contentfulFetch(query);
    const data = await response.json();

    if (response.ok) {
      return data.data.blogPostCollection.items[0];
    }
    return fail(response.status, {
      message: response.statusText,
    });
  } catch (error) {
    return fail(500, {
      message: "Something went wrong",
    });
  }
});
