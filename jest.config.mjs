export default {
  testEnvironment: 'jest-environment-node',
  setupFiles: ['./jest-setup.js'],
  testMatch: [
    '**/__tests__/**/*.test.(m)?js',
  ],
  preset: '@shelf/jest-dynamodb',
};