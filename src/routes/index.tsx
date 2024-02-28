import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "~/components/hero/hero";
import { Poruka } from "~/components/poruka/poruka";

export default component$(() => {
  return (
    <>
      <Hero />
      <Poruka />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
