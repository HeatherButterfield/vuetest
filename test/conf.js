let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  seleniumAddress: 'https://rNetwork:479bb1d7-c3b0-4748-b13d-223aee158bb9@ondemand.us-west-1.saucelabs.com:443/wd/hub',
  sauceUser: 'rNetwork',
  sauceKey: '479bb1d7-c3b0-4748-b13d-223aee158bb9',
  framework: 'jasmine',
  specs: ['spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: 'pretty'
      },
      summary: {
        displayDuration: false
      }
    }));
    jasmine.getEnv().addReporter({
        suiteStarted: async (result) => {
            await browser.executeScript('sauce:job-name=' + result.fullName);
        },
        specStarted: async (result) => {
            await browser.executeScript('sauce:context=' + result.fullName);
        },
        specDone: async (result) => {
            // If there are errors please update the error to Sauce Labs
            if (result.failedExpectations.length > 0) {
                const promisses = result.failedExpectations.map(async error => {
                    const errorUpdate = await browser.executeScript('sauce:context=' + error.stack);

                    return errorUpdate;
                });

                await Promise.all(promisses);
            }
        },
    });
  }
};
