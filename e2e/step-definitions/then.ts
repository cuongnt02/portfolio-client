import { Then } from "@wdio/cucumber-framework";
import { $, $$, browser, expect } from "@wdio/globals";

Then("I should see the portfolio owner's name", async () => {
  const owner_name = await $("aria/Header");
  await expect(owner_name).toHaveText("Nguyen Tan Cuong");
});

Then("I should see the owner\'s job", async () => {
  const job = await $("aria/Job");
  await expect(job).toHaveText(expect.stringContaining("Software Developer"));
});

Then("I should see some brief introduction", async () => {
  const introduction = await $("aria/Intro");
  await expect(introduction).toHaveText(expect.stringContaining("journey"));
});

Then("I should see the title named after the owner", async () => {
  await expect(browser).toHaveTitle("Nguyen Tan Cuong - Home page");
});

Then(
  "I should see a navigation menu with Home, My Story, Projects and Contacts",
  async () => {
    const nav_elements = ["Home", "My Story", "Projects", "Contact"];
    for await (const item of $$("li")) {
      const item_link = item.$("a");
      const item_text = await item_link.getText();
      await expect(nav_elements).toContain(item_text);
    }
  },
);

Then(/^I should see a section titled "(.*)"$/i, async (sectionTitle) => {
  const section = await $(`h1=${sectionTitle}`);
  await expect(section).toHaveText(sectionTitle);
});

Then(
  "I should see a short description about the owner’s background or journey",
  async () => {
    const journey = await $("aria/Journey");
    await journey.waitForDisplayed();
    expect(journey).toHaveText(expect.stringContaining("journey"));
  },
);

Then(
  "I should see one or more images related to the owner’s story",
  async () => {
    const journey_image_picture = await $("img=Mario");
    const journey_image_mario = await $("img=Picture");

    await journey_image_mario.waitForDisplayed();
    await journey_image_picture.waitForDisplayed();

    expect(journey_image_picture).toBeDisplayed();
    expect(journey_image_mario).toBeDisplayed();
  },
);

Then("I should see a link or button to view the full story page", async () => {
  const view_story_button = await $("button");
  await view_story_button.waitForDisplayed();
  expect(view_story_button).toBeDisplayed();
});

// TODO: When clicking the button -> navigate
