exports.config = {
  directConnect: true,
  chromeDriver: '/app/.chromedriver/bin/chromedriver',
  framework: 'jasmine',
  specs: ['spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
};
