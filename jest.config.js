module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(t|j)sx?$': 'esbuild-jest',
  },
  testMatch: null,
  testRegex: '(/__tests__/.*)\\.test\\.(tsx?)$',
  setupFiles: ['./jest-setup.js'],
};
