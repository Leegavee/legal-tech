module.exports = function () {
  return {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testMatch: ['<rootDir>/src/**/*.test.(ts|tsx|js|jsx)'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    globals: {
      'ts-jest': {
        tsconfig: './tsconfig.test.json',
      },
    },
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',
    },
  };
};
