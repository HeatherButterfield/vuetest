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

    await $('#fname').clear();
    await $('#fname').sendKeys('John');
    await $('#lname').clear();
    await $('#lname').sendKeys('Smith');
    await $('.submit-button').click();

    await browser.wait(EC.urlContains('/r/bo/account/details'), 5000);

    expect(await $('#account-editable li:first-child').getText()).toContain('John Smith');

    //undo edit
    await $('[href="/r/bo/account/name"] div').click();

    await browser.wait(EC.urlContains('/r/bo/account/name'), 5000);

    await $('#fname').clear();
    await $('#fname').sendKeys('rNetwork');
    await $('#lname').clear();
    await $('#lname').sendKeys('Corporation');
    await $('.submit-button').click();

    await browser.wait(EC.urlContains('/r/bo/account/details'), 5000);

    expect(await $('#account-editable li:first-child').getText()).toContain('rNetwork Corporation');
  });

  it('should edit account email', async function() {
    const EC = protractor.ExpectedConditions;

    await $('[href="/r/bo/account/email"] div').click();

    await browser.wait(EC.urlContains('/r/bo/account/email'), 5000);

    await $('input').clear();
    await $('input').sendKeys('admin2@rnetwork.io');
    await $('.submit-button').click();

    await browser.wait(EC.urlContains('/r/bo/account/details'), 5000);

    expect(await $('#account-editable li:nth-child(2)').getText()).toContain('admin2@rnetwork.io');

    //undo edit
    await $('[href="/r/bo/account/email"] div').click();

    await browser.wait(EC.urlContains('/r/bo/account/email'), 5000);

    await $('input').clear();
    await $('input').sendKeys('admin@rnetwork.io');
    await $('.submit-button').click();

    await browser.wait(EC.urlContains('/r/bo/account/details'), 5000);

    expect(await $('#account-editable li:nth-child(2)').getText()).toContain('admin@rnetwork.io');
  });

  it('should edit account phone number', async function() {
    const EC = protractor.ExpectedConditions;

    await $('[href="/r/bo/account/phone"] div').click();

    await browser.wait(EC.urlContains('/r/bo/account/phone'), 5000);

    await $('input:nth-child(2)').clear();
    await $('input:nth-child(2)').sendKeys('1234567890');
    await $('.submit-button').click();

    await browser.wait(EC.urlContains('/r/bo/account/details'), 5000);

    expect(await $('#account-editable li:nth-child(3)').getText()).toContain('1234567890');

    //undo edit
    await $('[href="/r/bo/account/phone"] div').click();

    await browser.wait(EC.urlContains('/r/bo/account/phone'), 5000);

    await $('input:nth-child(2)').clear();
    await $('input:nth-child(2)').sendKeys('5555555555');
    await $('.submit-button').click();

    await browser.wait(EC.urlContains('/r/bo/account/details'), 5000);

    expect(await $('#account-editable li:nth-child(3)').getText()).toContain('5555555555');
  });

  it('should edit pay with commissions', async function() {
    const EC = protractor.ExpectedConditions;

    await $('.account-return [href="/account"]').click();
    await browser.wait(EC.urlContains('/account'), 5000);

    await $('#admin-apps [href="/account/commissions"]').click();
    await browser.wait(EC.urlContains('/account/commissions'), 5000);

    if ($('[href="/r/bo/account/paywithcomm"]').isPresent() {
      await $('.cashout-wrapper div div a').click();
      await browser.wait(EC.urlContains('paywithcomm'), 5000);
      await $('#account-selectpayment select').$('[value="existing"]').click();
      await $('.submit-button').click();
      await browser.wait(EC.urlContains('/account/commissions'), 5000);
      expect(await $('.cashout-wrapper').getText()).toContain('Off');
    }
    else {
      await $('.cashout-wrapper div div a').click();
      await browser.wait(EC.urlContains('paywithcomm'), 5000);
      await $('#account-selectpayment select').$('[value="existing"]').click();
      await $('.submit-button').click();
      await browser.wait(EC.urlContains('/account/commissions'), 5000);
      expect(await $('.cashout-wrapper').getText()).toContain('On');
    }
  });
});
