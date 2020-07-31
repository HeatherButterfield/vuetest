exports.config = {
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    }
  },
  framework: 'jasmine',
  specs: ['spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
};
