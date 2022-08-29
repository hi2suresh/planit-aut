import { Given, When, Then } from '@wdio/cucumber-framework';

/** Given Steps **/
Given(/Contact page is opened/, async function () {
  await browser.url('/');
  await browser.pause();
});

/** When Steps **/
When(
  /I click on submit with out entering mandatory data/,
  async function () {}
);

When(
  /I enter the following data in the contact page/,
  async function (datatable) {}
);

When(/I click on submit/, async function () {});

/** Then Steps **/
Then(
  /Contact page shows the following errors for missing mandatory fields/,
  async function (datatable) {
    console.log(JSON.stringify(datatable.hashes()));
  }
);

Then(
  /(.*) message is shown to the user/,
  async function (string sucessMessage) {
  }
);
