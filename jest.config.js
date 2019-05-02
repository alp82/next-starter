module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/cypress/', '<rootDir>/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  },
}