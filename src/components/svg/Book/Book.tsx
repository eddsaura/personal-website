import { component$ } from "@builder.io/qwik";

export const Book = component$(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <g class="book">
        <path
          fill="#FDF3E4"
          fill-rule="evenodd"
          d="M2 0a1 1 0 0 0-1 1v14.775a1 1 0 0 0 .096.428l1.528 3.225a1 1 0 0 0 .904.572H18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-1v16H5l-1-2h11V1a1 1 0 0 0-1-1H2Z"
          class="Subtract"
          clip-rule="evenodd"
        />
      </g>
    </svg>
  );
});
