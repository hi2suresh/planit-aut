import BasePage from './BasePage';

class ShopPage extends BasePage {
  constructor() {
    super();
  }

  get cart() {
    return $("//a[contains(text(), 'Cart')]");
  }

  async navigateTo() {
    // @ts-ignore
    await super.navigateTo(`${browser.config.planit_AUT_Url}#/shop`);
  }

  async getProductBuyButton(productName: string): Promise<WebdriverIO.Element> {
    return $(
      `//h4[text()='${productName}']/following-sibling::p/a[text()='Buy']`
    );
  }

  async getProductPrice(productName: string): Promise<WebdriverIO.Element> {
    return $(`//h4[text()='${productName}']/following-sibling::p/span]`);
  }

  async buyProduct(productName: string, productQuantity: number) {
    let counter = 0;
    while (counter < productQuantity) {
      await this.click(await this.getProductBuyButton(productName));
      counter++;
    }
  }

  async gotoCartPage() {
    await this.click(await this.cart);
  }
}

export default new ShopPage();
