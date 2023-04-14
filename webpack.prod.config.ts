import * as path from "path";
import { Configuration } from "webpack";
import  HtmlWebpackPlugin from "html-webpack-plugin";
import  ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import  ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  optimization:{
    splitChunks: { chunks: 'all' }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|woff|woff2|ttf|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/favicon.ico'),
          to: path.resolve(__dirname, 'build'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      minify: { collapseWhitespace: true },
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename:'[name].[contenthash].css'}),

  ],
};

export default config;
