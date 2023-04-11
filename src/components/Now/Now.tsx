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
        <br />
        <b>Stack:</b> Nextjs + Jitsi
      </p>
      <p>
        HTML & CSS teacher at{" "}
        <a
          href="https://www.baued.es/en/studies/masters-and-postgraduate-degrees/master-in-digital-experience-design"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          BAU's Digital Experience Design
        </a>{" "}
        Masters Degree.
      </p>
      <p>
        Discovering my <i>ikigai.</i>
      </p>
    </section>
  );
});
