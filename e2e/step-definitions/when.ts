import { When } from "@wdio/cucumber-framework";
import { $, browser } from "@wdio/globals";

When("I scroll down to the story section", async () => {
  const section = await $("aria/My Story");
  await section.scrollIntoView();
});

When("I scroll down to the projects section", async () => {
  const section = await $("aria/Projects");
  await section.scrollIntoView();
});
