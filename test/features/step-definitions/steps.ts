import { Given, When, Then } from '@wdio/cucumber-framework';
import CartPage from '../../page-objects/CartPage';
import ContactPage from '../../page-objects/ContactPage';
import ShopPage from '../../page-objects/ShopPage';

/** Given Steps **/
Given(/<(.*)> page is opened/, async function (page: string) {
  console.log(page);
  switch (page) {
    case 'Contact':
      await ContactPage.navigateTo();
      break;

    case 'Shop':
      await ShopPage.navigateTo();
      break;

    default:
      throw Error('Invalid page');
  }
});

/** When Steps **/
When(
  /user clicks on submit with out entering mandatory data/,
  async function () {
    await ContactPage.clickSubmit();
  }
);

When(
  /user submits form with "(.*)", "(.*)" and "(.*)" data in the contact page/,
  async function (name: string, email: string, message: string) {
    await ContactPage.submitForm(name, email, message);
  }
);

When(
  /user selects the following products from the shop page/,
  async function (datatable) {
    for (const obj of datatable.hashes()) {
      await ShopPage.buyProduct(obj['ProductName'], obj['ProductQuantity']);
    }
  }
);

When(/user navigates to Cart Page/, async function () {
  await ShopPage.gotoCartPage();
});

/** Then Steps **/
Then(
  /Contact page shows the following errors for missing mandatory fields/,
  async function (datatable) {
    console.log(JSON.stringify(datatable.hashes()));
    for (const obj of datatable.hashes()) {
      console.log(JSON.stringify(obj));
      let actualErrorMessage = await ContactPage.getErrorMessage(
        obj['MissingField']
      );
      expect(actualErrorMessage).toEqual(obj['ExpectedFieldError']);
    }
  }
);

Then(
  /"(.*)" message is shown to the user/,
  async function (expectedSuccessMessage) {
    const actualSuccessMessage = await ContactPage.getSuccessMessage();
    expect(actualSuccessMessage).toEqual(expectedSuccessMessage);
  }
);

Then(
  /the Cart page will be updated with the following data/,
  async function (datatable) {
    console.log(JSON.stringify(datatable.hashes()));
    for (const obj of datatable.hashes()) {
      console.log(JSON.stringify(obj));
      let actualQuantity = await CartPage.getProductQuantity(
        obj['ProductName']
      );
      let actualPrice = await CartPage.getProductPrice(obj['ProductName']);
      let actualSubTotal = await CartPage.getProductSubTotal(
        obj['ProductName']
      );
      expect(actualQuantity).toEqual(obj['ProductQuantity']);
      expect(actualPrice).toEqual(obj['ProductPrice']);
      expect(actualSubTotal).toEqual(obj['SubTotal']);
    }
  }
);

Then(
  /the Cart page total will be of value "(.*)"/,
  async function (expectedTotal) {
    // Get the Total number
    const actualTotal = (await CartPage.getTotal()).split(' ')[1];
    expect(actualTotal).toEqual(expectedTotal);
  }
);
