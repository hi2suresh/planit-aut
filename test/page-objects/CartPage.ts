import BasePage from './BasePage';

class CartPage extends BasePage {
  constructor() {
    super();
  }

  /** Page Actions */

  /**
   * Returns the total value from the Cart page
   * @returns
   */
  async getTotal(): Promise<string> {
    return await $('tfoot .total').getText();
  }

  /**
   * Returns the price details based on the productname
   * @param productName e.g. Stuffed Frog
   * @returns e.g. $10.99
   */
  async getProductPrice(productName: string): Promise<string> {
    return await $(
      `//td[contains(text(), '${productName}')]/following-sibling::td[1]`
    ).getText();
  }

  /**
   * Returns the product quanity details based on the productname
   * @param productName e.g. Stuffed Frog
   * @returns e.g. 2
   */
  async getProductQuantity(productName: string): Promise<string> {
    return await $(
      `//td[contains(text(), '${productName}')]/following-sibling::td[2]/input`
    ).getValue();
  }

  /**
   * Returns the product quanity details based on the productname
   * @param productName e.g. Stuffed Frog
   * @returns e.g.$155.99
   */
  async getProductSubTotal(productName: string): Promise<string> {
    return await $(
      `//td[contains(text(), '${productName}')]/following-sibling::td[3]`
    ).getText();
  }
}

export default new CartPage();
