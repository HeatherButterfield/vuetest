exports.config = {
  directConnect: true,
  chromeDriver: '/app/node_modules/chromedriver/lib/chromedriver/chromedriver',
  framework: 'jasmine',
  specs: ['spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
};
