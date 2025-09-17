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

// After(async () => {
//   browser.deleteSession();
// });
