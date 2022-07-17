// var babel = require("@babel/core");
// import * as babel from "@babel/core";

// module: {
//   rules: [
//     {
//       loader: "babel-loader",
//       options: {
//         rootMode: "upward",
//       },
//     },
//   ];
// }

// module.exports = require("babel-jest").default.createTransformer({
//   rootMode: "upward",
// });

module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
