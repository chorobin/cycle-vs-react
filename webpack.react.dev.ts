import common from "./webpack.react.common";
import merge from "webpack-merge";

const config = merge(common, {
  mode: "development",
});

export default config;
