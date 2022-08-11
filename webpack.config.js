import WebExtPlugin from 'web-ext-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV == 'production';

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
  entry: {
    background: "./src/background.js"
  },
  output: {
    path: path.resolve(__dirname, "addon"),
    filename: "[name]/index.js"
  }
};
