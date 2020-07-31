exports.config = {
  chromeDriver: '/app/.apt/usr/bin/google-chrome';
  framework: 'jasmine',
  specs: ['spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
};
