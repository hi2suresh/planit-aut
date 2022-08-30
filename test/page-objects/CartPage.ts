import BasePage from './BasePage';

class CartPage extends BasePage {
  constructor() {
    super();
  }

  async getTotal(): Promise<string> {
    return await $('tfoot .total').getText();
  }

  async getProductPrice(productName: string): Promise<string> {
    return await $(
      `//td[contains(text(), '${productName}')]/following-sibling::td[1]`
    ).getText();
  }

  async getProductQuantity(productName: string): Promise<string> {
    return await $(
      `//td[contains(text(), '${productName}')]/following-sibling::td[2]/input`
    ).getValue();
  }

  async getProductSubTotal(productName: string): Promise<string> {
    return await $(
      `//td[contains(text(), '${productName}')]/following-sibling::td[3]`
    ).getText();
  }
}

export default new CartPage();
