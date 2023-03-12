module.exports = function (wallaby) {
  return {
    autoDetect: true,
  };
  // return {
  //   files: [
  //     // common files
  //     { pattern: 'package.json', instrument: false },
  //     { pattern: 'tsconfig.json', instrument: false },
  //     './applications/egal/src/**/*.ts',
  //     '!./applications/egal/src/**/*.test.ts',
  //     // Jest config
  //     { pattern: 'applications/egal/jest.config.js', instrument: false },
  //     // any additional files needed for your project
  //     // ...
  //   ],
  //   tests: ['./applications/egal/src/**/*.test.ts'],
  //   env: {
  //     type: 'node',
  //     runner: 'node',
  //   },
  //   compilers: {
  //     '**/*.ts': wallaby.compilers.typeScript(),
  //   },
  //   testFramework: 'jest',
  //   setup: function (wallaby) {
  //     const path = require('path');
  //     const jestConfigFilePath = require(path.resolve(
  //       process.cwd(),
  //       'applications/egal/jest.config.js',
  //     ));
  //     wallaby.testFramework.configure(jestConfigFilePath);
  //   },
  // };
};
