export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },

  // // 共通のモックを用意するファイルを指定
  // setupFiles: ["<rootDir>/src/__test__/common.ts"],
};