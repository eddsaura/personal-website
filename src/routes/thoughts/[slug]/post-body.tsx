import { component$ } from "@builder.io/qwik";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export const PostBody = component$(
  ({ content }: { content: { json: any } }) => {
    return (
      <div dangerouslySetInnerHTML={documentToHtmlString(content.json)}></div>
    );
  }
);
