import { Given } from "@wdio/cucumber-framework";
import { browser, expect } from "@wdio/globals";

Given("I am on the homepage", async () => {
  await browser.url("http://localhost:5173");
});
