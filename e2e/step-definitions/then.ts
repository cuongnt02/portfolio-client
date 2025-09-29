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
    for await (const item of $("nav").$("ul").$$("li")) {
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
    expect(journey).toBeDisplayed();
  },
);

Then(
  "I should see one or more images related to the owner’s story",
  async () => {
    const journey_image_mario = await $("aria/Mario");
    const journey_image_profile = await $("aria/Profile");

    await journey_image_mario.waitForDisplayed();
    await journey_image_profile.waitForDisplayed();

    expect(journey_image_profile).toBeDisplayed();
    expect(journey_image_mario).toBeDisplayed();
  },
);

Then("I should see a link or button to view the full story page", async () => {
  const view_story_button = await $("aria/View Full Story");
  await view_story_button.waitForDisplayed();
  expect(view_story_button).toBeDisplayed();
});

Then("I should see the owner's brief list of projects", async () => {
  const project_list = await $("aria/Projects");
  project_list.waitForDisplayed();
  expect(project_list).toBeDisplayed();
});

Then("I should see each project associated with a version", async () => {
  const project = await $("aria/Project Portfolio");
  project.waitForDisplayed();
  expect(project).toBeDisplayed();
  const version = await $("aria/Project Portfolio - Version");
  version.waitForDisplayed();
  expect(version).toBeDisplayed();
});

Then("I should see each project associated with a build status", async () => {
  const project = await $("aria/Project Portfolio");
  project.waitForDisplayed();
  expect(project).toBeDisplayed();
  const version = await $("aria/Project Portfolio - Build Status");
  version.waitForDisplayed();
  expect(version).toBeDisplayed();
});

Then("I should see each project linked with a github link", async () => {
  const project = await $("aria/Project Portfolio");
  project.waitForDisplayed();
  expect(project).toBeDisplayed();
  const version = await $("aria/Project Portfolio - VCS");
  version.waitForDisplayed();
  expect(version).toBeDisplayed();
});
// TODO: When clicking the button -> navigate
