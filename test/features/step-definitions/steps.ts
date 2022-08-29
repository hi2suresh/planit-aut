import { Given, When, Then } from '@wdio/cucumber-framework';
import ContactPage from '../../page-objects/ContactPage';

/** Given Steps **/
Given(/(.*) page is opened/, async function (page: string) {
  switch (page) {
    case 'Contact':
      ContactPage.navigateTo();
      break;

    case 'Shop':
      ContactPage.navigateTo();
      break;

    default:
      throw Error('Invalid page');
  }
});

/** When Steps **/
When(
  /user clicks on submit with out entering mandatory data/,
  async function () {
    ContactPage.clickSubmit();
  }
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

Then(/(.*) message is shown to the user/, async function (successMessage) {});
