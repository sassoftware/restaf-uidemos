/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
//const { EvalDevToolModulePlugin } = require("webpack");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  let usePath =  path.resolve(__dirname, (env.p === 'y') ? 'dist' : 'lib');
  let optimize = {
    minimize: false
  };
  if (env.p === 'y') {
    optimize = {
      minimize: true,
      minimizer: [new TerserPlugin()]
    }
  };
  /* creates issues when library is used in other projects
  let plugins = [new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  })];
  */
  let plugins = [];
  if (env.p === 'a') {
    plugins.push(new BundleAnalyzerPlugin());
  }
  let config = {
    entry: './index.js',
    mode: (env.p === 'y') ? "production" : "development",
    plugins: plugins,
    optimization: optimize,
    output: {
      path: usePath,
      filename: 'index.js',
      libraryTarget: 'umd',
      library: "smartControls",
      umdNamedDefine: true,
      globalObject: 'this'
    },
    module: {
      rules: [
        {
          test: /\.txt$/i,
          type: "asset/source",
        },
        {
          test: /\.html$/i,
          type: "asset/source",
        },
        {
          test: /\.svg$/i,
          type: "asset/inline",
        },
        {
          test: /\.png$/i,
          type: "asset/inline",
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        { test: /\.css$/, use: ["style-loader", "css-loader"] }

        /*
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ],
        },
        */


      ],
    },

    externals: {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'ReactDOM',
      },
    },

  };
  if (env.p !== 'y') {
    config.devtool = 'source-map';
  }
  console.log(config);
  return config;
}
