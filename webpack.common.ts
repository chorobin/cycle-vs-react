import * as webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};

export default config;
