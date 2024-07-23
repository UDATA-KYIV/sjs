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
    ],
  },
};
