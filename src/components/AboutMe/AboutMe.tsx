import { component$ } from "@builder.io/qwik";

export const AboutMe = component$(() => {
  return (
    <section class="mb-16">
      <h1 class="text-2xl mb-4">
        Jose Eduardo <br />
        Saura Oller
      </h1>
      <p class="max-w-sm">
        It feels weird to me to define myself just as someone who codes web
        apps.
      </p>
      <p class="max-w-xs">Driven by design, community and ideas. </p>
    </section>
  );
});
