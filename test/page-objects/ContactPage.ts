class ContactPage extends BasePage {
  constructor() {
    super();
  }

  /** Contact Page Elements */
  get forename() {
    return $('#forename');
  }
  get forenameMissingError() {
    return $('#forename-err');
  }
  get headerAlert() {
    return $('#header-message > div.alert');
  }
  get email() {
    return $('#email');
  }
  get emailMissingError() {
    return $('#email-err');
  }
  get message() {
    return $('#message');
  }
  get messageMissingError() {
    return $('#message-err');
  }
  get submit() {
    return $('//a[text()="Submit"]');
  }

  get alertSuccessMessage() {
    return $('div.alert-success');
  }

  /** Contact Page Actions */

  async navigateTo() {
    await browser.url('/contact');
    await this.submit.waitForExist({ timeout: this.shortWaitTimeOut });
  }

  async clickSubmit() {
    await this.click(await this.submit);
  }

  async submitForm(name: string, email: string, message: string) {
    await this.type(await this.forename, name);
    await this.type(await this.email, email);
    await this.type(await this.message, message);
    this.clickSubmit();
  }

  async getSuccessMessage(): Promise<string> {
    await this.alertSuccessMessage.waitForExist({
      timeout: this.longWaitTimeOut,
    });

    return await (await this.alertSuccessMessage).getText();
  }

  async getErrorMessage(field: string): Promise<string> {
    let element = null;
    if (field.includes('Forename')) {
      element = this.forenameMissingError;
    } else if (field.includes('Email')) {
      element = this.emailMissingError;
    } else if (field.includes('Message')) {
      element = this.messageMissingError;
    }

    return await element.getText();
  }
}

export default new ContactPage();
