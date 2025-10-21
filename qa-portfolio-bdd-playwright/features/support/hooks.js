const { Before, After } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');

Before(async function () {
  await this.openBrowser();
});

After(async function (scenario) {
  if (scenario.result?.status === 'FAILED') {
    const screenshotPath = path.join('reports', `ERROR_${Date.now()}.png`);
    await this.page.screenshot({ path: screenshotPath });
  }
  await this.closeBrowser();
});
