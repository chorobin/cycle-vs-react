import common from "./webpack.common";
import merge from "webpack-merge";
import ForkTsCheckerPlugin from "fork-ts-checker-webpack-plugin";

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
        loader: "babel-loader",
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
  plugins: [
    /*new ForkTsCheckerPlugin({
      tsconfig: "./react/tsconfig.json",
    }),*/
  ],
});

export default config;
