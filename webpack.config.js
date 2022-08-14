// const path = require("path");

// module.exports = {
//   devtool: "source-map",
//   mode: "production",
//   entry: "./src/scripts/index.js",
//   output: {
//     filename: "main.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   module: {
//     loaders: [
//       { exclude: ["node_modules"], loader: "babel", test: /\.jsx?$/ },
//       { loader: "style-loader!css-loader", test: /\.css$/ },
//       { loader: "url-loader", test: /\.gif$/ },
//       { loader: "file-loader", test: /\.(ttf|eot|svg)$/ },
//     ],
//   },
// };

const path = require("path");

module.exports = {
  mode: "production", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: "./src/scripts/index.js", // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "dist"), // string (default)
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        // Conditions:
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        test: /\.jsx?$/,
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        dependency: { not: ["url"] },
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],

        type: "javascript/auto",
        // specifies the module type
        /* Advanced actions (click to show) */
      },
    ],
    /* Advanced module configuration (click to show) */
  },
  devtool: "source-map",
};
