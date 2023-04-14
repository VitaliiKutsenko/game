import  * as path from "path";
import { Configuration as WebpackConfiguration, HotModuleReplacementPlugin } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import  HtmlWebpackPlugin from "html-webpack-plugin";
import  ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import  ESLintPlugin from "eslint-webpack-plugin";
import  ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import  CopyWebpackPlugin from 'copy-webpack-plugin';
import  MiniCssExtractPlugin from 'mini-css-extract-plugin';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: "development",
  output: {
    publicPath: "/",
  },
  entry: "./src/index.tsx",
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
            plugins:['@babel/plugin-proposal-class-properties', 'react-refresh/babel']
          },
        },
      },
    ],
  },
  resolve: {
    alias:{
      '@src': path.join(__dirname, 'src'),
      '@public': path.join(__dirname, 'public')
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/favicon.ico'),
          to: path.resolve(__dirname, 'build'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new MiniCssExtractPlugin({filename:'[name].css'}),
    new ReactRefreshWebpackPlugin(),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },
};

export default config;