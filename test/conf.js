var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  seleniumAddress: 'https://rNetwork:479bb1d7-c3b0-4748-b13d-223aee158bb9@ondemand.us-west-1.saucelabs.com:443/wd/hub',
  sauceUser: 'rNetwork',
  sauceKey: '479bb1d7-c3b0-4748-b13d-223aee158bb9',
  framework: 'jasmine',
  specs: ['spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true,
    print: function() {},
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'tmp/screenshots'
    }).getJasmine2Reporter());
  }
};
