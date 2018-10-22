import webpackDevServer from "webpack-dev-server";
import path from "path";
import * as webpack from "webpack";
import merge from "webpack-merge";

export default (config: webpack.Configuration) => {
  const devConfig = merge(config, {
    mode: "development",
  });
  webpackDevServer.addDevServerEntrypoints(devConfig, {
    contentBase: path.resolve(__dirname, "dist"),
    port: 9000,
    host: "localhost",
  });
  return devConfig;
};
