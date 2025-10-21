const { setWorldConstructor } = require('@cucumber/cucumber');
const playwright = require('playwright');

class CustomWorld {
  async openBrowser() {
    this.browser = await playwright.chromium.launch({ headless: true });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
