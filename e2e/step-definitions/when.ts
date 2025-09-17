import { When } from "@wdio/cucumber-framework";
import { $, browser } from "@wdio/globals";

When("I scroll down to the story section", async () => {
  const section = await $("section=My Story");
  await section.scrollIntoView();
});
