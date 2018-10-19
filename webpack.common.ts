import * as webpack from "webpack";

const config: webpack.Configuration = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};

export default config;
