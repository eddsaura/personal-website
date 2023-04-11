import { server$ } from "@builder.io/qwik-city";
import { Client } from "@notionhq/client";
import type { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Post } from "~/types/posts/Posts";

const notion = new Client({ auth: import.meta.env.VITE_NOTION_SECRET_KEY });

const databaseId: string = import.meta.env.VITE_BLOG_DATABASE_ID || "";

export const getItems = server$(async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return formatResponse(response);
});

const formatResponse = (response: QueryDatabaseResponse): Post[] => {
  return response.results.map((page) => {
    return {
      id: page.id,
      slug: page.properties.slug.rich_text[0].plain_text,
      title: page.properties.name.title[0].plain_text,
      creationDate: page.created_time,
    };
  });
};

export const getPage = async (slug: string) => {
  const pageId = "59833787-2cf9-4fdf-8782-e53db20768a5";
  const response = await notion.pages.retrieve({ page_id: pageId });
  console.log(response);
};
