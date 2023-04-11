import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="mb-16">
      <h2 class="italic text-xl">Now</h2>
      <p>
        Working @ Stooa as a Frontend developer.
        <br />
        It is a cool open source product by{" "}
        <a
          class="decorated"
          href="https://runroom.com"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Runroom
        </a>
        .
        <br /> Nextjs + jitsi
      </p>
      <p>HTML & CSS teacher at BAU's Experience Design Masters Degree.</p>
      <p>
        Discovering my <i>ikigai.</i>
      </p>
    </section>
  );
});
