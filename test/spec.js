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
});
