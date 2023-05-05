import { component$ } from "@builder.io/qwik";

export const Diamond = component$(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="19"
      fill="none"
      viewBox="0 0 24 19"
      class="group"
    >
      <g class="diamond">
        <g class="Mask group">
          <mask
            id="diamond-mask"
            width="24"
            height="19"
            x="0"
            y="0"
            class="a"
            maskUnits="userSpaceOnUse"
            style="mask-type:alpha"
          >
            <path
              fill="#FDF3E4"
              d="M12.114 18.409 23.427 6.726 17.771.885H6.457L.8 6.726 12.114 18.41Z"
              class="Rectangle 24"
            />
          </mask>
          <g class="Group 3" mask="url(#diamond-mask)">
            <path
              fill="url(#b)"
              d="M0 0h6.177v21.275H0z"
              class="Rectangle 6"
              transform="scale(-.98383 1.01591) rotate(-45 -4.261 33.884)"
            />
            <path
              fill="url(#c)"
              d="M0 0h6.177v21.275H0z"
              class="Rectangle 7"
              transform="scale(-.98383 1.01591) rotate(-45 -7.173 26.854)"
            />
            <path
              fill="url(#d)"
              d="M0 0h6.177v21.275H0z"
              class="Rectangle 8"
              transform="scale(-.98383 1.01591) rotate(-45 -10.085 19.825)"
            />
          </g>
        </g>
        <path
          fill="#FDF3E4"
          d="M12.114 18.409 23.427 6.726 17.771.885H6.457L.8 6.726 12.114 18.41Z"
          class="shape transition-opacity group-hover:opacity-0"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="3.088"
          x2="3.088"
          y1="0"
          y2="21.176"
          class="b"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4497B1" />
          <stop offset=".595" stop-color="#64C5CD" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="3.088"
          x2="3.088"
          y1="0"
          y2="21.176"
          class="c"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6DC0C5" />
          <stop offset="1" stop-color="#39DAF0" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="3.088"
          x2="3.088"
          y1="0"
          y2="14.658"
          class="d"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#B3E9E6" />
          <stop offset="1" stop-color="#3DD8ED" />
        </linearGradient>
      </defs>
    </svg>
  );
});
