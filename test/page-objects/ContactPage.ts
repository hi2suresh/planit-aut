import BasePage from './BasePage';

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
    return $("//a[text()='Submit']");
  }

  get alertSuccessMessage() {
    return $('div.alert-success');
  }

  /** Contact Page Actions */

  async navigateTo() {
    // @ts-ignore
    await super.navigateTo(`${browser.config.planit_AUT_Url}#/contact`);
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
    console.log(`Field value is: ${field}`);
    let element = null;
    if (field.includes('ForeName')) {
      element = await this.forenameMissingError;
    } else if (field.includes('Email')) {
      element = await this.emailMissingError;
    } else if (field.includes('Message')) {
      element = await this.messageMissingError;
    }

    return await element.getText();
  }
}

export default new ContactPage();
