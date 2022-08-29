class BasePage {
  shortWaitTimeOut: number;
  longWaitTimeOut: number;
  constructor() {
    this.shortWaitTimeOut = 5000;
    this.longWaitTimeOut = 15000;
  }

  /** Reusable methods */
  async navigateTo() {
    await browser.url('/');
    await browser.maximizeWindow();
  }

  async click(element: WebdriverIO.Element) {
    await element.waitForClickable({ timeout: this.shortWaitTimeOut });
    if (!element.elementId) throw Error(element.error.message);
    element.click();
  }

  async type(element: WebdriverIO.Element, text: string) {
    await element.waitForDisplayed({ timeout: this.shortWaitTimeOut });
    if (!element.elementId) throw Error(element.error.message);
    element.setValue(text);
  }

  async isElementPresent(element: WebdriverIO.Element): Promise<Boolean> {
    return await element.isExisting();
  }
}
