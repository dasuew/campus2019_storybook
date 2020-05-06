module.exports = {
  verbose: true,
  moduleFileExtensions: ['js'],
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.js'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sss|styl)$': 'jest-css-modules',
  },
  testMatch: ['<rootDir>/src/**/*.test.(js|jsx)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}