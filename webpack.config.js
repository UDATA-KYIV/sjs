//const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Injects CSS into the DOM.
          "css-loader", // Translates CSS into CommonJS modules.
          "sass-loader", // Compiles Sass to CSS.
        ],
      },
      {
        test: /\.(gltf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/models",
            },
          },
        ],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
    ],
  },
  devtool: "source-map",
  ignoreWarnings: [
    (warning) =>
      warning.message.includes("Failed to parse source map") ||
      warning.message.includes("ENOENT: no such file or directory"),
  ],
};
