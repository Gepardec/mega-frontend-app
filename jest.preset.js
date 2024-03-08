const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  // bug related to jest:
  // https://github.com/jsverse/transloco/issues/714#issuecomment-1896184902
  moduleNameMapper: {
    '^flat': 'node_modules/flat/index.js',
  }
};
