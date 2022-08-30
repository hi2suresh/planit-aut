export default class BasePage {
  shortWaitTimeOut: number;
  mediumWaitTimeOut: number;
  longWaitTimeOut: number;

  constructor() {
    this.shortWaitTimeOut = 5000;
    this.mediumWaitTimeOut = 10000;
    this.longWaitTimeOut = 15000;
  }

  /** Reusable methods */
  async navigateTo(path: string) {
    await browser.url(path);
    await browser.waitUntil(
      async () =>
        await browser.execute(() => document.readyState === 'complete'),
      {
        timeout: this.mediumWaitTimeOut,
        timeoutMsg:
          'Element is not displayed even after waiting for ${this.mediumWaitTimeOut} seconds',
      }
    );
    await browser.maximizeWindow();
  }

  async click(element: WebdriverIO.Element) {
    await element.waitForClickable({ timeout: this.mediumWaitTimeOut });
    if (!element.elementId) throw Error(element.error.message);
    await element.click();
    //await browser.pause(60000);
  }

  async type(element: WebdriverIO.Element, text: string) {
    await element.waitForDisplayed({ timeout: this.shortWaitTimeOut });
    if (!element.elementId) throw Error(element.error.message);
    await element.setValue(text);
  }

  async isElementPresent(element: WebdriverIO.Element): Promise<Boolean> {
    return await element.isExisting();
  }
}
