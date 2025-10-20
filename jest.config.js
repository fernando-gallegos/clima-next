// Configuración de Jest integrada con Next.js
const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: './' });
const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  collectCoverageFrom: [
    'components/**/*.{js,jsx}',
    'app/**/*.{js,jsx}',
    '!app/layout.jsx',
    '!app/api/**'
  ],
  coverageThreshold: {
    global: { branches: 80, functions: 80, lines: 80, statements: 80 }
  },
};
module.exports = createJestConfig(customJestConfig);
