exports.config = {
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  specs: ['spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
};
