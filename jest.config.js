module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: [
    "jest-dom/extend-expect",
    "react-testing-library/cleanup-after-each"
  ]
};
