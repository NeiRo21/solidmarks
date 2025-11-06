import WebExtPlugin from 'web-ext-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';

export default {
  mode: isProduction ? "production" : "development",
  node: false,
  devtool: "source-map",
  plugins: [
    new WebExtPlugin(
      {
        sourceDir: path.resolve(__dirname, "addon"),
        firefoxProfile: 'dev',
        keepProfileChanges: true
      }
    )
  ],
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  entry: {
    background: "./src/background.ts",
    popup: "./src/popup.ts",
  },
  output: {
    path: path.resolve(__dirname, "addon"),
    filename: "[name]/index.js",
    clean: {
      keep(asset) {
        return asset.endsWith(".html") ||
          asset.endsWith(".json") ||
          asset.endsWith(".png") ||
          asset.endsWith(".svg");
      }
    },
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/, },
      { test: /\.js$/, loader: "source-map-loader" },
    ]
  },
};
