import {
  Given,
  Then,
  Before,
  After,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import { Builder, Browser, By, Key } from "selenium-webdriver";
import * as chai from "chai";

let driver;

Before(async () => {
  setDefaultTimeout(5 * 1000);
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

After(async () => {
  driver.quit();
});

Given("I am on the homepage", async () => {
  await driver.get("http://localhost:5173");
});

Then("I should see the portfolio owner's name", async () => {
  let owner_name = driver.findElement(By.css("h1"));
  chai.expect(owner_name.text).to.equal("Nguyen Tan Cuong");
});

Then("I should see the owner\'s job", () => {
  let job = driver.findElement(By.css(".job"));
  chai.expect(job.text).to.include("Software developer");
});

Then("I should see the title named after the owner", function () {
  let title = driver.findElement(By.css("title"));
  assert.strictEqual(title.text, "Nguyen Tan Cuong - Home page");
});

Then(
  "I should see a navigation menu with Home, My Story, Projects and Contacts",
  () => {
    let nav_elements = ["Home", "My Story", "Projects", "Contacts"];
    let items = driver.findElements(By.css(".nav-item"));
    items.forEach((item) => {
      chai.expect(item.text).to.be.oneOf(nav_elements);
    });
  },
);

Then("I should see some brief introduction", function () {
  let introduction = driver.findElement(By.css(".intro"));
  chai.expect(introduction).to.exist();
});
