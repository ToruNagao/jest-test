module.exports = {
    verbose: true ,
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/tests/**',
        '!**/coverage/**',
        '!jest.config.js',
      ],
    testMatch: [
        "**/__test__/**/*.test.js",
        "**/__sample_test__/**/*.test.js"
    ],
    moduleFileExtensions: [
        "js",
        "json",
        "jsx"
    ],
    moduleNameMapper: {
        "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub"
    },
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFilesAfterEnv: ["jest-enzyme"],
    testEnvironment: "enzyme"
};
