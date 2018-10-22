import common from "./webpack.common";
import merge from "webpack-merge";

const config = merge(common, {
  entry: "./react/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
          configFileName: "./react/tsconfig.apps.json",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              hmr: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: true,
            },
          },
        ],
      },
    ],
  },
});

export default config;
