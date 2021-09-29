/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts', 'jest-axe/extend-expect'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
