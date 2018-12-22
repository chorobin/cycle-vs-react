import * as webpack from "webpack";
import merge from "webpack-merge";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default (config: webpack.Configuration) => {
  return merge(config, {
    mode: "production",
    plugins: [new BundleAnalyzerPlugin()],
  });
};
