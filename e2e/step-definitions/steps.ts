import {
  Given,
  Then,
  Before,
  After,
  setDefaultTimeout,
} from "@wdio/cucumber-framework";
import { remote } from "webdriverio";
import { expect, $, $$, browser } from "@wdio/globals";

Before(async () => {
  setDefaultTimeout(5 * 1000);
});

After(async () => {
  browser.deleteSession();
});

Given("I am on the homepage", async () => {
  await browser.url("http://localhost:5173");
  await expect(browser).toHaveUrl("http://localhost:5173/");
});

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
