import common from "./webpack.common";
import merge from "webpack-merge";

const config = merge(common, {
  entry: "./cycle/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-typescript", ["@babel/preset-env", { modules: false }]],
          plugins: [["@babel/plugin-syntax-jsx"], ["@babel/plugin-transform-react-jsx", { pragma: "html" }]],
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
  plugins: [
    /*new ForkTsCheckerPlugin({
      tsconfig: "./cycle/tsconfig.json",
    }),*/
  ],
});

export default config;
