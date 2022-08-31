import BasePage from './BasePage';

class ShopPage extends BasePage {
  constructor() {
    super();
  }

  get cart() {
    return $('#nav-cart');
  }

  /** Shop Page Actions */
  async navigateTo() {
    // @ts-ignore
    await super.navigateTo(`${browser.config.planit_AUT_Url}#/shop`);
  }

  /**
   * Returns the product buy button element based on Product name
   * @param productName e.g. Stuffed Frog
   * @returns e.g. Stuffed Frog Buy Button
   */
  async getProductBuyButton(productName: string): Promise<WebdriverIO.Element> {
    return $(
      `//h4[text()='${productName}']/following-sibling::p/a[text()='Buy']`
    );
  }

  /**
   * Returns the product price element based on Product name
   * @param productName e.g. Stuffed Frog
   * @returns e.g. Stuffed Frog Price $10.99
   */
  async getProductPrice(productName: string): Promise<WebdriverIO.Element> {
    return $(`//h4[text()='${productName}']/following-sibling::p/span]`);
  }

  /**
   * Clicks on the product buy button <n> number of times based on ProductName and ProductQuantity
   * @param productName  e.g. Stuffed Frog
   * @param productQuantity e.g. 5
   */
  async buyProduct(productName: string, productQuantity: number) {
    let counter = 0;
    // Loop through and Click on product buy button as per product quantity
    while (counter < productQuantity) {
      await this.click(await this.getProductBuyButton(productName));
      counter++;
    }
  }

  /**
   * Navigate to Cart page
   */
  async gotoCartPage() {
    await this.click(await this.cart);
  }
}

export default new ShopPage();
