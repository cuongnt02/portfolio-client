import {
  Given,
  Then,
  Before,
  After,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import { remote } from "webdriverio";
import { expect, $ } from "@wdio/globals";

let browser;
Before(async () => {
  setDefaultTimeout(5 * 1000);
  browser = await remote({
    capabilities: {
      browserName: "chrome",
    },
  });
});

After(async () => {
  browser.deleteSession();
});

Given("I am on the homepage", async () => {
  await browser.url("http://localhost:5173");
  await expect(browser).toHaveUrl("http://localhost:5173/");
});

Then("I should see the portfolio owner's name", async () => {
  const owner_name = await $('h1="Nguyen Tan Cuong"');
  await expect(owner_name).toHaveText("Nguyen Tan Cuong");
});

Then("I should see the owner\'s job", async () => {
  const job = await $("aria/Job");
  await expect(job).toHaveText(expect.stringContaining("Software developer"));
});

Then("I should see the title named after the owner", async function () {
  const title = await $("title");
  await expect(title).toHaveText("Nguyen Tan Cuong - Home page");
});

Then(
  "I should see a navigation menu with Home, My Story, Projects and Contacts",
  async () => {
    const nav_elements = ["Home", "My Story", "Projects", "Contacts"];
    const items = $("li");
    items.forEach(async (item) => {
      await expect(nav_elements).toContains(expect.toHaveText(item));
    });
  },
);

Then("I should see some brief introduction", async () => {
  const introduction = await $("h2.intro");
  expect(introduction).toHaveText();
});
