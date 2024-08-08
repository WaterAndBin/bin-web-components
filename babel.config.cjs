module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: [
            "last 3 Chrome versions",
            "last 3 Firefox versions",
            "Safari >= 10",
            "Explorer >= 11",
            "Edge >= 12",
          ],
          esmodules: true,
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "@babel/plugin-transform-runtime",
  ],
};
