const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const LoginPage = require('../../pages/login.page');

Given('que estou na página de login', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.open();
});

When('eu insiro credenciais válidas', async function () {
  await this.loginPage.login('standard_user', 'secret_sauce');
});

When('clico no botão de login', async function () {
  // O clique já está incluído no método login, deixado aqui para clareza.
});

Then('devo ver a lista de produtos', async function () {
  const title = await this.loginPage.getProductsTitle();
  assert.strictEqual(title.trim(), 'Products');
});
