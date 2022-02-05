module.exports = {
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],
    moduleNameMapper: {
        // Handle CSS imports (with CSS modules)
        // https://jestjs.io/docs/webpack#mocking-css-modules
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

        // Handle CSS imports (without CSS modules)
        '^.+\\.(css|sass|scss)$': '<rootDir>/src/tests/mocks/styleMock.js',

        // Handle image imports
        // https://jestjs.io/docs/webpack#handling-static-assets
        '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/src/tests/mocks/fileMock.js`,

        // Handle module aliases
        '^@styles/(.*)$': '<rootDir>/src/styles/$1',
        '^@assets/(.*)$': '<rootDir>/src/assets/$1',
        '^@pages/(.*)$': '<rootDir>/src/pages/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@api/(.*)$': '<rootDir>/src/lib/api/$1',
        '^@utils/(.*)$': '<rootDir>/src/lib/utils/$1',
        '^@docs/(.*)$': '<rootDir>/src/docs/$1',
    },
    // Add more setup options before each test is run
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.js'
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/.next/'
    ],
    testEnvironment: 'jsdom',
    transform: {
        // Use babel-jest to transpile tests with the next/babel preset
        // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
}