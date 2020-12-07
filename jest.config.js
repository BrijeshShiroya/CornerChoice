module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js'
  },
  setupFiles: ['<rootDir>/jest/setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-button|native-base-.*|react-native-.*|@react-native-community/.*|@codler)/)'
  ],
  moduleDirectories: ['node_modules', 'src'],
  coveragePathIgnorePatterns: ['/node_modules/', '/jest']
};
