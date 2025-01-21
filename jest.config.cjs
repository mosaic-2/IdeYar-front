module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["<rootDir>/src/__tests__/**/*.test.{ts,tsx}"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  coverageDirectory: "coverage",
  // collectCoverageFrom: [
  //   "src/**/*.{ts,tsx}",
  //   "!src/**/*.d.ts",
  //   "!src/main.tsx",
  //   "!src/vite-env.d.ts",
  // ],
};
