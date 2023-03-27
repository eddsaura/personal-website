import { component$ } from "@builder.io/qwik";

import Hero from "~/components/hero/hero";
import Sidebar from "~/components/Sidebar/Sidebar";
import { MainLayout } from "~/layout/Main/MainLayout";

export default component$(() => {
  return (
    <MainLayout>
      <Sidebar />
      <Hero />
    </MainLayout>
  );
});
