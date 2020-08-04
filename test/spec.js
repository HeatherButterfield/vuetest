describe('Test 1', function() {
  it('should select a country', async function() {
    const EC = protractor.ExpectedConditions;

    await browser.waitForAngularEnabled(false);
    await browser.get('https://test.rnetwork.io/r/country/select');

    await $('#CountryID').$('[value="IN"]').click();
    await $('.submit-button').click();

    await browser.wait(EC.urlContains('/r/home'), 5000);
    let flag = $('.country-flag');
    expect(await flag.getText()).toEqual('IN');
  });

  it('should log in', async function() {
    const EC = protractor.ExpectedConditions;

    await $('#login').$('a').click();

    await browser.wait(EC.urlContains('/account/login'), 5000);

    await $('#Input_LoginName').sendKeys('10000000');
    await $('#password').sendKeys('TestAccount123');
    await $('[value="Login"]').click();

    await browser.wait(EC.urlContains('/account?justSignedIn=true'), 5000);

    expect(await $('h1.full-width').getText()).toEqual('Welcome to Your Dashboard');
  });

  it('should go to the account details page', async function() {
    const EC = protractor.ExpectedConditions;

    await $('[alt="Account Details"]').click();

    await browser.wait(EC.urlContains('/r/bo/account/details'), 5000);

    expect(await $('main h1').getText()).toEqual('Account Details');
  });

  it('should edit account name', async function() {
    const EC = protractor.ExpectedConditions;

    await $('[href="/r/bo/account/name"] div').click();

    await browser.wait(EC.urlContains('/r/bo/account/name'), 5000);

    await $('#fname').sendKeys('John');
    await $('#lname').sendKeys('Smith');
    await $('.submit-button').click();

    await browser.wait(EC.urlContains('/r/bo/account/details'), 5000);

    expect(await $('#account-editable li:first-child').getText()).toContain('John Smith');

    //undo edit
    await $('[href="/r/bo/account/name"] div').click();

    await browser.wait(EC.urlContains('/r/bo/account/name'), 5000);

    await $('#fname').sendKeys('rNetwork');
    await $('#lname').sendKeys('Corporation');
    await $('.submit-button').click();

    await browser.wait(EC.urlContains('/r/bo/account/details'), 5000);

    expect(await $('#account-editable li:first-child').getText()).toContain('rNetwork Corporation');
  });
});
