// module.exports = {
//   preset: "jest-puppeteer",
//   testEnvironment: "jsdom",
//   setupFilesAfterEnv: ["./jest.setup.js"],
//   testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
// };
// module.exports = {
//   setupFilesAfterEnv: ['./jest.setup.js'],
//   testEnvironment: 'node', // Используйте полное имя пакета
//   testMatch: ['**/__tests__/**/*.test.js'],
// };
// module.exports = {
//   setupFilesAfterEnv: ['./jest.setup.js'],
//   testEnvironment: 'jest-environment-jsdom', // Используйте полное имя пакета
//   testMatch: ['**/__tests__/**/*.test.js'],
// };
module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],
  preset: 'jest-puppeteer',
};
