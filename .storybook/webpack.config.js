// const path = require('path');

// // Export a function. Accept the base config as the only param.
// module.exports = async ({ config, mode }) => {
//   // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
//   // You can change the configuration based on that.
//   // 'PRODUCTION' is used when building the static version of storybook.

//   // Make whatever fine-grained changes you need
//   config.module.rules.push({
//     test: /\.scss$/,
//     use: ['style-loader', 'css-loader', 'sass-loader'],
//     include: path.resolve(__dirname, '../'),
//   });

//   // Return the altered config
//   return config;
// };

// const path = require("path");

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: 'babel-loader'
//           }
//         ]
//       },
//       {
//         test: /\.less$/,
//         use: [
//           {
//             loader: "style-loader"
//           },
//           {
//             loader: "css-loader"
//           },
//           {
//             loader: "less-loader",
//             options: {
//               javascriptEnabled: true
//             }
//           },
//         ],
//         include: path.resolve(__dirname, "../")
//       },
//       {

//         test: /\.(ttf)(\?v=\d+\.\d+\.\d+)?$/,
//         use: {
//           loader: "url-loader",
//           options: {
//             limit: 50000,
//             mimetype: "application/ttf",
//             name: "./res/fonts/[name].[ext]",
//           }
//         },
//       }
//     ]
//   }
// };