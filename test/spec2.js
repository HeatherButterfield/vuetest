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


});
